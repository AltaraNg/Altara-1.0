<?php


namespace App\Services;


use App\Amortization;
use App\BusinessType;
use App\OrderType;
use App\PaymentGateway;
use App\Events\RepaymentEvent;
use App\NewOrder;
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
        $data = NewOrder::where('business_type_id', BusinessType::whereIn('slug', $this->businessType)->first()->id)
            ->whereHas('late_fee_gen')->with('late_fee_gen');
        return $data->get()->filter(function ($c) {
            return Carbon::parse($c->late_fee_gen->expected_payment_date)->day == Carbon::now()->day;
        })->values();
    }

    public function handle()
    {
        $items = $this->fetchOrders();
        $res = array();
        if (empty($items)) {
            return 'No Customers are available';
        }
        foreach ($items as $item) {

            # code...
            $data = [
                'order_id' => $item->id,
                'amount' => $this->paystackService->getLateFee($item),
            ];

            $dataToDisplay = [
                'Order Number' => $item->order_number,
                'Amount' => $this->paystackService->getLateFee($item),
                'Customer Name' => $item->customer_name
            ];

            $response = PaymentService::logLateFee($data);

            if ($response['status'] == 'success') {

                $res[] = array_merge($dataToDisplay, [
                    'status' => 'success',
                ]);
            } else {
                $res[] = array_merge($dataToDisplay, [
                    'status' => 'failed',

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
