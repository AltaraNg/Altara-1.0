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

    private  $businessType = [BusinessType::ALTARA_CREDIT_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_PRODUCT_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_NINE_MONTHS, BusinessType::ALTARA_PAY_SUPER_LOAN_RENEWAL, BusinessType::ALTARA_PAY_SUPER_LOAN_NEW, BusinessType::ALTARA_PAY_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_RENTALS_SLUG];

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

    private function fetchOrders($day)
    {
        $today = '';
        $data = NewOrder::whereHas('businessType', function ($q) {
            $q->whereIn('slug', $this->businessType);
        })
            ->whereHas('late_fee_gen')->with('late_fee_gen');
        if ($day == null) {
            $today = Carbon::now()->day;
        } else {
            $today = $day;
        }
        return $data->get()->filter(function ($c) use ($today) {
            return Carbon::parse($c->amortization[$c->amortization->count() - 1]->expected_payment_date)->day == $today;
        })->values();
    }

    public function handle($day)
    {

        $items = $this->fetchOrders($day);
        $res = array();
        if (empty($items)) {
            return 'No Customers are available';
        }
        foreach ($items as $item) {

            # code...
            $data = [
                'order_id' => $item->id,
                'amount_due' => $this->paystackService->getLateFee($item),
                'date_created' => Carbon::now()->format('Y-m-d')
            ];

            $dataToDisplay = [
                'Order ID' => $item->id,
                'Order Number' => $item->order_number,
                'Amount' => $this->paystackService->getLateFee($item),

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

        return $res;
    }
}
