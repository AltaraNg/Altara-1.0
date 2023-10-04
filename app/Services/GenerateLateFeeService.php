<?php


namespace App\Services;


use App\Models\BusinessType;
use App\Models\NewOrder;
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

    private  $businessType = [BusinessType::ALTARA_CREDIT_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_PRODUCT_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_NINE_MONTHS, BusinessType::ALTARA_PAY_SUPER_LOAN_RENEWAL, BusinessType::ALTARA_PAY_SUPER_LOAN_NEW, BusinessType::ALTARA_PAY_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_RENTALS_SLUG, BusinessType::ALTARA_PAY_NO_BS_NEW_NON_VERVE, BusinessType::ALTARA_PAY_NO_BS_NEW_VERVE, BusinessType::ALTARA_PAY_NO_BS_RENEWAL_NON_VERVE, BusinessType::ALTARA_PAY_NO_BS_RENEWAL_VERVE];

    /**
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
            $response = ['status' => 'failed'];
            if ($this->paystackService->getLateFee($item) !== 'invalid') {
                $data = [
                    'order_id' => $item->id,
                    'amount_due' => $this->paystackService->getLateFee($item),
                    'date_created' => Carbon::now()->format('Y-m-d')
                ];
                $response = PaymentService::logLateFee($data);
            }


            $dataToDisplay = [
                'Order ID' => $item->id,
                'Order Number' => $item->order_number,
                'Amount' => $this->paystackService->getLateFee($item),
                'Reason' => $this->paystackService->getLateFee($item) == 'invalid' ? "Price calculator doesn't exist" : ''

            ];


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
