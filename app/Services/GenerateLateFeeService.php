<?php


namespace App\Services;


use App\Amortization;
use App\BusinessType;
use App\OrderType;
use App\PaymentGateway;
use App\Events\RepaymentEvent;
use App\OrderStatus;
use App\PaymentMethod;
use App\PaymentType;
use Carbon\Carbon;

class GenerateLateFeeService
{
    /**
     * @var MailService
     */
    private $mailService;
    /**
     * @var PaystackService
     */
    private $paystackService;

    private  $businessType = [BusinessType::ALTARA_CREDIT_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_PRODUCT_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_EMPLOYEE_CASH_LOAN_SLUG];

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
            ->whereDay('expected_payment_date', Carbon::now()->day)
            ->whereDate('expected_payment_date', '!=', Carbon::now())
            ->whereHas('new_orders', function ($q) {
                $q->where('status_id', OrderStatus::where('name', OrderStatus::ACTIVE)->first()->id)
                    ->where('business_type_id', BusinessType::whereIn('slug', $this->businessType)->first()->id)
                    ->where('payment_gateway_id', PaymentGateway::where('name', PaymentGateway::PAYSTACK)->first()->id);
            });

        return $data->get();
    }

    public function handle()
    {
        $items = $this->fetchOrders();
        // dd($items);

        $res = array();
        if (empty($items)) {
            return 'No Customers are available';
        }
        foreach ($items as $item) {

            # code...
            $data = [
                'order_id' => $item->new_orders->id,
                'amount' => $this->paystackService->getLateFee($item),
            ];

            $response = PaymentService::logLateFee($data);



            if ($response['status'] == 'success') {
                // $item->new_orders['amount'] = $item->expected_amount;
                // $item->new_orders['is_dd'] = true;
                // $resp = PaymentService::logPayment($data_for_log, $item->new_orders);
                // event(new RepaymentEvent($item->new_orders));
                $res[] = array_merge($data, [
                    'status' => 'success',
                    'statusMessage' => 'Approved'
                ]);
            } else {
                $res[] = array_merge($data, [
                    'status' => 'failed',
                    // 'statusMessage' => (isset($response->data) &&  isset($response->data->gateway_response)) ? $response->data->gateway_response : ($response ? $response->message : 'Something went wrong')
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
