<?php


namespace App\Services;


use App\Amortization;
use App\Contracts\PaymentGatewayInterface;
use App\LateFee;

class PaystackService implements PaymentGatewayInterface
{

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
        return $amortization->expected_amount * 100;
    }
    public function getLateFee($order)
    {
        $amortizationList = $order->amortization;
        $totalPaid = $this->getTotalPaidRepayment($amortizationList);
        $expectedRepayment = $this->getTotalExpected($amortizationList);
        $debt =  $expectedRepayment - $totalPaid;
        return $debt * 5.5 / 100;
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
}
