<?php


namespace App\Services;


use App\Contracts\PaymentGatewayInterface;
use App\Models\Amortization;
use App\Models\GuarantorPaystackAuthCode;
use App\Models\LateFee;
use App\Models\PriceCalculator;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PaystackService implements PaymentGatewayInterface
{


    public function generateTemporaryAccountNumber($amount, $email, $expiration = 1)
    {
        $expiresAt = now()->addHours($expiration);
        $data = [
            'amount' => $amount * 100,
            'email' => $email,
            'bank_transfer' => [
                "account_expires_at" => $expiresAt->toIso8601String(),
            ],
        ];
//        dd($data);
        $response = Http::withUrlParameters([
            'endpoint' => config('paystack.paymentUrl'),
        ])->withHeaders(["Authorization" => "Bearer " . config('paystack.secretKey')])
            ->post('{+endpoint}/charge', $data);
        if (!$response->json('status')) {
            return [
                'success' => false,
                'message' => $response->json('message'),
            ];
        }
        return [
            'success' => true,
            'message' => $response->json('message'),
            'data' => $response->json('data'),
        ];
    }


    public function initiatKyc($account_number, $bvn, $bank_code, $first_name, $last_name, $customer_code)
    {
        $identificationData = [
            "country" => "NG",
            "type" => "bank_account",
        ];

        if (config('app.env') != 'production') {
            $identificationData = $identificationData + [
                    "account_number" => "0111111111",
                    "bvn" => "22222222222",
                    "bank_code" => "007",
                    "first_name" => "Uchenna",
                    "last_name" => "Okoro",
                ];
        } else {
            $identificationData = [
                "account_number" => $account_number,
                "bvn" => $bvn,
                "bank_code" => $bank_code,
                "first_name" => $first_name,
                "last_name" => $last_name,
            ];
        }
        $response = Http::withUrlParameters([
            'endpoint' => config('paystack.paymentUrl'),
            'customer_code' => $customer_code,
        ])->withHeaders(["Authorization" => "Bearer " . config('paystack.secretKey')])
            ->post('{+endpoint}/customer/{customer_code}/identification', $identificationData);
        if ($response->json('message') != "Customer Identification in progress") {
            $message = $response->json('message');
            if (str_contains($message, 'BVN')) {
                $message = "BVN cannot be more 11 characters than";
            } elseif (str_contains($message, 'Customer already validated')) {
                $message = "Kyc has already been processed";
            } else {
                Log::error($message);
                $message = "An error occurred while trying to validate the bank account, try again later";
            }
            return $message;
        }
        return null;
    }

    public function createCustomer($email, $firstName, $lastName, $phone)
    {
        $response = Http::withUrlParameters([
            'endpoint' => config('paystack.paymentUrl'),
        ])->withHeaders(["Authorization" => "Bearer " . config('paystack.secretKey')])
            ->post('{+endpoint}/customer', [
                "email" => $email,
                "first_name" => $firstName,
                "last_name" => $lastName,
                "phone" => $phone,
            ]);
        if ($response->status() != 200) {
            Log::error($response->json());
            return null;
        }
        return $response;
    }

    public function resolveAccountNumber($account_number, $bank_code)
    {
        $params = "?account_number=$account_number&bank_code=$bank_code";
        $response = Http::withUrlParameters([
            'endpoint' => config('paystack.paymentUrl'),
        ])->withHeaders(["Authorization" => "Bearer " . config('paystack.secretKey')])
            ->get('{+endpoint}/bank/resolve' . $params);


        if ($response->unprocessableEntity()) {
            return [
                'status' => "failed",
                'message' => 'Could not resolve account name, ensure you supplied right account number and selected correct bank',
                'data' => null
            ];
        }
        $data = $response->json('data');
        return [
            'status' => "success",
            'message' => 'Account number resolved',
            'data' => [
                "account_number" => $data['account_number'],
                "account_name" => $data['account_name'],
            ]
        ];
    }

    public function charge(Amortization $amortization)
    {
        $url = config('app.paystack_charge_url');
        $fields = [
            'authorization_code' => $this->getAuthCode($amortization),
            'email' => $this->getEmail($amortization),
            'amount' => $this->getAmount($amortization),
            'subaccount' => $this->getBankCode($amortization)
        ];
        $fields_string = http_build_query($fields);

        //open connection
        $ch = curl_init();

        //set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Authorization: Bearer " . config('app.paystack_secret'),
            "Cache-Control: no-cache",
        ));

        //So that curl_exec returns the contents of the cURL; rather than echoing it
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        //execute post
        return json_decode(curl_exec($ch));
    }

    public function chargeLateFee(LateFee $lateFee)
    {
        $url = config('app.paystack_charge_url');
        $fields = [
            'authorization_code' => $this->getAuthCode($lateFee),
            'email' => $this->getEmail($lateFee),
            'amount' => ($lateFee->amount_due - $lateFee->amount_paid) * 100,
            'subaccount' => $this->getBankCode($lateFee)
        ];
        $fields_string = http_build_query($fields);
        // dd($fields);
        $ch = curl_init();

        //set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Authorization: Bearer " . config('app.paystack_secret'),
            "Cache-Control: no-cache",
        ));

        //So that curl_exec returns the contents of the cURL; rather than echoing it
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        //execute post
        return json_decode(curl_exec($ch));
    }

    public function chargeCustomer(Amortization $amortization, int $amount, int $account)
    {
        $url = config('app.paystack_charge_url');
        $fields = [
            'authorization_code' => $account == 0 ? $this->getAuthCode($amortization) : GuarantorPaystackAuthCode::where('id', $account)->first()->auth_code,
            'email' => $account == 0 ? $this->getEmail($amortization) : GuarantorPaystackAuthCode::where('id', $account)->first()->guarantor_email,
            'amount' => $amount * 100,
            'subaccount' => $this->getBankCode($amortization)
        ];
        return $this->makePostRequest($url, $fields);
    }

    private function getAuthCode($amortization)
    {
        return $amortization->new_orders->authCode->auth_code ?? '';
    }

    private function getBankCode($amortization)
    {
        return $amortization->new_orders->branch->paystackBranches->code ?? '';
    }

    private function getAmount($amortization)
    {
        return ($amortization->expected_amount - $amortization->actual_amount) * 100;
    }

    public function getLateFee($order)
    {
        $amortizationList = $order->amortization;
        $totalPaid = $this->getTotalPaidRepayment($amortizationList);
        $expectedRepayment = $this->getTotalExpected($amortizationList);
        $debt = $expectedRepayment - $totalPaid;
        $interest = PriceCalculator::where([['business_type_id', '=', $order->business_type_id], ['down_payment_rate_id', $order->down_payment_rate_id], ['repayment_duration_id', $order->repayment_duration_id]])->first();
        if ($interest == null) {
            return 'invalid';
        }
        return $debt * $interest->interest / 100;
    }

    private function getEmail($amortization)
    {
        return $amortization->new_orders->customer->email;
    }

    private function getTotalPaidRepayment($a)
    {
        $repayment = ($a->toArray());
        $actual = array_map(array($this, 'extractActual'), $repayment);
        $sum = array_sum($actual);
        return $sum;
    }

    private function getTotalExpected($a)
    {
        $repayment = ($a->toArray());
        $actual = array_map(array($this, 'extractExpected'), $repayment);
        $sum = array_sum($actual);
        return $sum;
    }

    public function extractActual($item)
    {
        return $item['actual_amount'];
    }

    public function extractExpected($item)
    {
        return $item['expected_amount'];
    }

    private function makePostRequest($url, array $fields)
    {
        $fields_string = http_build_query($fields);

        //open connection
        $ch = curl_init();

        //set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Authorization: Bearer " . config('app.paystack_secret'),
            "Cache-Control: no-cache",
        ));

        //So that curl_exec returns the contents of the cURL; rather than echoing it
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        //execute post
        return json_decode(curl_exec($ch));
    }
}
