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

        return $data->limit(5)->get();
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
            $data = [
                'customer_id' => $item->new_orders->customer_id,
                'customer_name' => $item->new_orders->customer->full_name,
                'order_id' => $item->new_orders->order_number,
                'amount' => $item->expected_amount,
            ];
            $data_for_log = [
                "amount" => $item->expected_amount,
                "customer_id" => $item->new_orders->customer_id,
                "payment_type_id" => PaymentType::where('type', PaymentType::REPAYMENTS)->first()->id,
                "payment_method_id" => PaymentMethod::where('name', 'direct-debit')->first()->id,
                "bank_id" => 6 //hardcoded to fcmb
            ];

            if (isset($response->data) && isset($response->data->status) && $response->data->status === "success") {
                $item->new_orders['amount'] = $item->expected_amount;
                $item->new_orders['is_dd'] = true;
                $resp = PaymentService::logPayment($data_for_log, $item->new_orders);
                // event(new RepaymentEvent($item->new_orders));
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
        try {
            $this->mailService->sendReportAsMail(
                'Direct Debit Report',
                $res,
                [config('app.operations_email'), 'tadewuyi@altaracredit.com'],
                'Direct Debit Report',
                'DirectDebit',
                'Direct Debit Report ' . Carbon::now()->toDateString()
            );
        } catch (BindingResolutionException $e) {
            FacadesLog::error($e->getMessage());
        } catch (Exception $e) {
            FacadesLog::error($e->getMessage()); 
        }

        return $res;
    }
}
