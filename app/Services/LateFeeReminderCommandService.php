<?php

namespace App\Services;

use App\Helper\Constants;
use App\Helper\Helper;
use App\Helper\LateFeeReminderMessages;
use App\Helper\LogHelper;
use App\Models\BusinessType;
use App\Models\NewOrder;
use App\Notifications\Models\SmsReminderModel;
use App\Notifications\SmsReminder;
use App\Notifications\SmsReminderSent;
use Carbon\Carbon;

class LateFeeReminderCommandService
{


    private $paystackService;
    private  $businessType = [BusinessType::ALTARA_CREDIT_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_PRODUCT_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_NINE_MONTHS, BusinessType::ALTARA_PAY_SUPER_LOAN_RENEWAL, BusinessType::ALTARA_PAY_SUPER_LOAN_NEW, BusinessType::ALTARA_PAY_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_RENTALS_SLUG];
    public function __construct(PaystackService $paystackService)
    {
        $this->paystackService = $paystackService;
    }

    public function handle($start_date)
    {

        $orders = NewOrder::where('order_date', '>=', $start_date)->whereHas('late_fee_gen')->whereHas('businessType', function ($q) {
            $q->whereIn('slug', $this->businessType);
        })->with('customer:id,first_name,last_name,telephone', 'amortization')->get();



        $response  = [];
        if (empty($orders)) {
            return 'No Customers are will be due for late fee soon';
        }

        $nextSevenDaysDay = Carbon::now()->endOfDay()->addDays(7)->day;
        $nextFifteenDaysDay =  Carbon::now()->endOfDay()->addDays(15)->day;
        $tomorrowDay =  Carbon::now()->endOfDay()->addDay()->day;
        foreach ($orders as  $order) {
            $amortization = $order->amortization;
            $lastAmortization = (object) $amortization[$amortization->count() - 1];
            if ($amortization && isset($lastAmortization->expected_payment_date)) {
                $expectedPaymentDay =  Carbon::parse($lastAmortization->expected_payment_date)->endOfDay()->day;
                if ($expectedPaymentDay === $nextFifteenDaysDay) {
                    $day = 15;
                    $messageToSend = LateFeeReminderMessages::DAY_FIFTEEN;
                } else if ($expectedPaymentDay === $nextSevenDaysDay) {
                    $day = 7;
                    $messageToSend = LateFeeReminderMessages::DAY_SEVEN;
                } else if ($expectedPaymentDay === $tomorrowDay) {
                    $day = 1;
                    $messageToSend = LateFeeReminderMessages::DAY_ONE;
                } else {
                    $day = null;
                    $messageToSend = null;
                }

                if ($day != null && $messageToSend != null) {
                    $data = $order->toArray();
                    //get late fee
                    $data['late_fee'] = $this->paystackService->getLateFee($order);
                    $data['amount_owed'] = $this->getAmountOwed(clone $order);
                    //remove this two keys since they are not needed
                    unset($data['renewal_prompters']);
                    unset($data['last_renewal_prompter_activity']);

                    $replacementKeys = Helper::generateReplacementKeys(array_keys($data));
                    $replacementValues    = array_values($data);
                    $message = preg_replace($replacementKeys, $replacementValues, $messageToSend);
                    $item = [
                        'customer_id' => $order->customer_id,
                        'customer_name' => $order->customer->full_name,
                        'order_number' => $order->order_number,
                        'tel' => $order->customer->telephone,
                        'message' => $message,
                    ];
                    try {
                        $reminderObject = new SmsReminderModel('day_' . $day  . '_sms', $message);
                        $order->customer->notify(new SmsReminder($reminderObject));
                        $response[] = array_merge($item, [
                            'status' => 'success',
                            'statusMessage' => 'Message sent Successfully'
                        ]);

                        $order->notify(new SmsReminderSent($reminderObject));
                    } catch (\Exception $e) {
                        LogHelper::error(strtr(Constants::FAILED_SMS, $order->toArray()), $e);
                        $response[] = array_merge($item, [
                            'status' => 'failed',
                            'statusMessage' => $e->getMessage()
                        ]);
                    }
                }
            }
        }

        return $response;
    }

    private function getAmountOwed($order)
    {
        return $order->amortization
            ->where('actual_payment_date', null)->where('actual_amount', '<', 1)
            ->where('expected_payment_date', '<', Carbon::now()->endOfDay())
            ->sum('expected_amount');
    }
}
