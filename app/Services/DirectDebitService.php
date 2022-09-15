<?php


namespace App\Services;


use App\OrderType;
use Carbon\Carbon;
use App\OrderStatus;
use App\PaymentType;
use App\Amortization;
use App\PaymentMethod;
use App\PaymentGateway;
use App\Events\RepaymentEvent;
use App\Log;
use App\NewOrder;
use Exception;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Facades\Log as FacadesLog;

class DirectDebitService
{
    /**
     * @var MailService
     */
    private $mailService;
    /**
     * @var PaystackService
     */
    private $paystackService;

    /**
     * DirectDebitService constructor.
     * @param MailService $mailService
     * @param PaystackService $paystackService
     */
    public function __construct(MailService $mailService, PaystackService $paystackService)
    {
        $this->mailService = $mailService;
        $this->paystackService = $paystackService;
    }

    private function fetchOrders()
    {
        //get list of due payments
        $data = Amortization::where('actual_payment_date', null)
            ->whereDate('expected_payment_date', '<=', Carbon::now())
            ->whereHas('new_orders', function ($q) {
                $q->where('status_id', OrderStatus::where('name', OrderStatus::ACTIVE)->first()->id)
                    ->where('order_type_id', OrderType::where('name', OrderType::ALTARA_PAY)->first()->id)
                    ->where('payment_gateway_id', PaymentGateway::where('name', PaymentGateway::PAYSTACK)->first()->id);
            });

        return $data->get();
    }

    public function handle()
    {
        $items = $this->fetchOrders();
        $res = array();
        if (empty($items)) {
            return 'No Customers are available';
        }
        foreach ($items as $item) {
            $response = $this->paystackService->charge($item);

            # code...
            $data = $this->constructReportData($item);
            $data_for_log = $this->constructPaymentLogData($item);
            if (isset($response->data) && isset($response->data->status) && $response->data->status === "success") {
                $item->new_orders['amount'] = $item->expected_amount;
                $item->new_orders['is_dd'] = true;
                $resp = PaymentService::logPayment($data_for_log, $item->new_orders);
                event(new RepaymentEvent($item->new_orders));
                $res[] = array_merge($data, [
                    'status' => 'success',
                    'statusMessage' => 'Approved'
                ]);
            } else {
                $res[] = array_merge($data, [
                    'status' => 'failed',
                    'statusMessage' => (isset($response->data) &&  isset($response->data->gateway_response)) ? $response->data->gateway_response : ($response ? $response->message : 'Something went wrong')
                ]);
            }
        }

        # send report mail
        $this->sendDirectDebitReport($res);
        return $res;
    }

    public function handleCustomDebit(NewOrder $new_order, $amount)
    {
        $amount = 915000;
        $amortizations = $new_order->amortization->where('actual_payment_date', null)->where('actual_amount', '<', 1);
        $sendNotification = false;
        $last_key = end(array_keys($amortizations));
        foreach ($amortizations as $key => $item) {
            if ($key != $last_key) {
                if ($amount >= $item->expected_amount) {
                    $item->new_orders['amount'] = $item->expected_amount;
                    $amount = $amount - $item->expected_amount;
                    $sendNotification = true;
                } else if ($amount <= $item->expected_amount && $amount > 0) {
                    $item->new_orders['amount'] = $amount;
                    $amount = 0;
                    $sendNotification = true;
                } else {
                    $sendNotification = false;
                }
            } else {
                if ($amount > 0) {
                    $item->new_orders['amount'] = $item->actual_amount + $amount;
                    $amount = 0;
                    $sendNotification = true;
                } else {
                    $sendNotification = false;
                }
            }
            if ($sendNotification == true) {
                $item->new_orders['is_dd'] = true;
                event(new RepaymentEvent($item->new_orders));
            }
        }

        dd($amount, $new_order->id);
        $res = array();
        // $item = $new_order->amortization[0];
        $response = $this->paystackService->chargeCustomer($new_order->amortization[0], $amount);
        if (isset($response->data) && isset($response->data->status) && $response->data->status === "success") {
        } else {
        }
        # code...
        $data = $this->constructReportData($item);
        $data_for_log = $this->constructPaymentLogData($item);
        $res = array_merge($res, $this->mergeResponse($response, $data, $data_for_log, $item));
        $this->sendDirectDebitReport($res);
        return $res;
    }

    private function sendDirectDebitReport(array $response)
    {
        try {
            $this->mailService->sendReportAsMail(
                'Direct Debit Report',
                $response,
                [config('app.operations_email'), config('app.admin_email')],
                'Direct Debit Report',
                'DirectDebit',
                'Direct Debit Report ' . Carbon::now()->toDateString()
            );
        } catch (BindingResolutionException $e) {
            FacadesLog::error($e->getMessage());
        } catch (Exception $e) {
            FacadesLog::error($e->getMessage());
        }
    }
    private function constructReportData(Amortization $item)
    {
        return [
            'customer_id' => $item->new_orders->customer_id,
            'customer_name' => $item->new_orders->customer->full_name,
            'order_id' => $item->new_orders->order_number,
            'amount' => $item->expected_amount,
        ];
    }
    private function constructPaymentLogData(Amortization $item)
    {
        return  [
            "amount" => $item->expected_amount,
            "customer_id" => $item->new_orders->customer_id,
            "payment_type_id" => PaymentType::where('type', PaymentType::REPAYMENTS)->first()->id,
            "payment_method_id" => PaymentMethod::where('name', 'direct-debit')->first()->id,
            "bank_id" => 6 //hardcoded to fcmb
        ];
    }

    private function mergeResponse($paystackResponse, array $data, array $paymentLogData, Amortization $item)
    {
        if (isset($paystackResponse->data) && isset($paystackResponse->data->status) && $paystackResponse->data->status === "success") {

            $item->new_orders['amount'] = $item->expected_amount;
            $item->new_orders['is_dd'] = true;
            $resp = PaymentService::logPayment($paymentLogData, $item->new_orders);
            event(new RepaymentEvent($item->new_orders));
            return array_merge($data, [
                'status' => 'success',
                'statusMessage' => 'Approved'
            ]);
        } else {
            return array_merge($data, [
                'status' => 'failed',
                'statusMessage' => (isset($paystackResponse->data) &&  isset($paystackResponse->data->gateway_response)) ? $paystackResponse->data->gateway_response : ($paystackResponse ? $paystackResponse->message : 'Something went wrong')
            ]);
        }
    }
}
