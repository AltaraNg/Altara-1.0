<?php


namespace App\Services;


use App\Amortization;
use App\Events\LateFeeDebitEvent;
use App\OrderType;
use App\PaymentGateway;
use App\Events\RepaymentEvent;
use App\LateFee;
use App\OrderStatus;
use App\PaymentMethod;
use App\PaymentType;
use Carbon\Carbon;

class LateFeeDeductionService
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
     *
     * @param MailService $mailService
     * @param PaystackService $paystackService
     */
    public function __construct(MailService $mailService, PaystackService $paystackService)
    {
        $this->mailService = $mailService;
        $this->paystackService = $paystackService;
    }

    private function fetchLateFees()
    {
        //get list of due payments
        $data = LateFee::whereRaw('amount_due <> amount_paid');
        return $data->get();
    }

    public function handle()
    {
        $items = $this->fetchLateFees();
        // dd($items);

        $res = array();
        if (empty($items)) {
            return 'No Customers are available for Late Fee Deduction';
        }
        foreach ($items as $item) {
            // dd($item->new_orders);

            $response = $this->paystackService->chargeLateFee($item);

            # code...
            $data = [
                'id' => $item->id,
                'order_id' => $item->order_id,
                'amount_paid' => $item->amount_due,
                'date_paid' => Carbon::now()->toDateString()
            ];
            $data_for_log = [
                "amount" => $item->amount_due,
                "customer_id" => $item->new_orders->customer_id,
                "payment_type_id" => PaymentType::where('type', PaymentType::LATE_FEE)->first()->id,
                "payment_method_id" => PaymentMethod::where('name', 'direct-debit')->first()->id,
                "bank_id" => 6 //hardcoded to fcmb
            ];

            if (isset($response->data) && isset($response->data->status) && $response->data->status === "success") {
                $resp = PaymentService::logLateFee($data);
                $resp2 = PaymentService::logPayment($data_for_log, $item->new_orders);
                event(new LateFeeDebitEvent($item));
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
        //        try {
        //            $this->mailService->sendReportAsMail('Direct Debit Report', $res,
        //                config('app.operations_email'), 'Direct Debit Report',
        //                'DirectDebit', 'Direct Debit Report ' . Carbon::now()->toDateString());
        //        } catch (BindingResolutionException $e) {
        //        }

        return $res;
    }
}
