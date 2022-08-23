<?php

namespace App\Services;

use App\NewOrder;
use Carbon\Carbon;
use App\BusinessType;
use App\Helper\Helper;
use App\Helper\Constants;
use App\Helper\LogHelper;
use App\Notifications\SmsReminder;
use App\Notifications\SmsReminderSent;
use App\Helper\LateFeeReminderMessages;
use App\Notifications\Models\SmsReminderModel;

class LateFeeReminderCommandService
{

    private $paystackService;
    private  $businessType = [BusinessType::ALTARA_CREDIT_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_PRODUCT_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_NINE_MONTHS, BusinessType::ALTARA_PAY_SUPER_LOAN_RENEWAL, BusinessType::ALTARA_PAY_SUPER_LOAN_NEW, BusinessType::ALTARA_PAY_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_RENTALS_SLUG];
    public function __construct(PaystackService $paystackService) {
        $this->paystackService = $paystackService;
    }
    public function handle()
    {
        $orders = NewOrder::whereHas('businessType', function ($q) {
            $q->whereIn('slug', $this->businessType);
        })->with('customer:id,first_name,last_name,telephone', 'amortization')->whereHas('late_fee_gen')->get();


        $response  = [];
        if (empty($orders)) {
            return 'No Customers are will be due for late fee soon';
        }
        $messageToSend = "";
        foreach ($orders as  $order) {
            $amortization = $order->amortization;
            $lastAmortization = (object) $amortization[$amortization->count() - 1];
            if ($amortization && isset($lastAmortization->expected_payment_date)) {
                $daysToLate =  Carbon::parse($lastAmortization->expected_payment_date)->day - Carbon::now()->day;
                if ($daysToLate > 0 && $daysToLate <= 14) {
                    if ($daysToLate  == 14) {
                        $messageToSend = LateFeeReminderMessages::DAY_FOURTEEN;
                    }
                    if ($daysToLate == 7) {
                        $messageToSend = LateFeeReminderMessages::DAY_SEVEN;
                    }
                    if ($daysToLate == 3) {
                        $messageToSend = LateFeeReminderMessages::DAY_THREE;
                    }
                    if ($daysToLate == 2) {
                        $messageToSend = LateFeeReminderMessages::DAY_ONE;
                    }
                    $data = $order->toArray();
                    $data['late_fee'] = $this->paystackService->getLateFee($order);
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
                        'message' => $message,
                    ];
                    try {
                        $reminderObject = new SmsReminderModel('day_' . $daysToLate . '_sms', $message);
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
}
