<?php

namespace App\Services;

use Carbon\Carbon;
use NumberFormatter;
use App\BusinessType;
use App\Helper\Helper;
use App\Helper\Constants;
use App\Helper\LogHelper;
use App\Notifications\SmsReminder;
use App\Notifications\SmsReminderSent;
use App\Notifications\Models\SmsReminderModel;
use Illuminate\Contracts\Container\BindingResolutionException;

class ReminderCommandService
{
    private $reminderService;
    /**
     * @var MailService
     */
    private $mailService;

    public function __construct(ReminderService $reminderService, MailService $mailService)
    {
        $this->reminderService = $reminderService;
        $this->mailService = $mailService;
    }

    public function handle($days, $type, $date)
    {
        $orders = $this->reminderService->fetchMessagingOrders($days, $date);

        $res = array();
        if (empty($orders)) {
            return 'No Customers are available';
        }
        foreach ($orders as $order) {

            $businessType = BusinessType::find($order->business_type_id);
            if (str_contains($businessType->name, 'Altara Credit')) {
                $getMessage = Constants::$reminderMessages[$type][Constants::ALTARACREDIT];
            } else {
                $getMessage = Constants::$reminderMessages[$type][Constants::ALTARAPAY];
            }
            # code...
            $data = $order->toArray();

            //remove this two keys since they are not needed
            unset($data['renewal_prompters']);
            unset($data['last_renewal_prompter_activity']);

            //create formatter object to add st, th, nd and th to count e.g 1st, 2nd, 3rd.
            //get number of times payment has been made and add 1 to know next number of payment then format
            $data['count'] = Helper::str_ordinal($order->amortization->where('actual_payment_date', '!=', null)->count() + 1);
            //get due date
            $data['due_date'] = $order->amortization->where('actual_payment_date', null)->sortBy('expected_payment_date')->first()->expected_payment_date;
            $replacementKeys = Helper::generateReplacementKeys(array_keys($data));
            $replacementValues    = array_values($data);
            $message = preg_replace($replacementKeys, $replacementValues, $getMessage);
            $item = [
                'customer_id' => $order->customer_id,
                'customer_name' => $order->customer->full_name,
                'order_id' => $order->order_number,
                'message' => $message,
            ];

            try {
                $reminderObject = new SmsReminderModel($type, $message);
                $order->customer->notify(new SmsReminder($reminderObject));
                $res[] = array_merge($item, [
                    'status' => 'success',
                    'statusMessage' => 'Message sent Successfully'
                ]);

                $order->notify(new SmsReminderSent($reminderObject));
            } catch (\Exception $e) {
                LogHelper::error(strtr(Constants::FAILED_SMS, $order->toArray()), $e);
                $res[] = array_merge($item, [
                    'status' => 'failed',
                    'statusMessage' => $e->getMessage()
                ]);
            }
        }

        # send report mail
        //        try {
        //            $this->mailService->sendReportAsMail($days . 'days sms reminder', $res,
        //                config('app.operations_email'), 'Sms Reminder Report',
        //                'SmsReminder', 'Sms Reminder report for ' . Carbon::parse($date)->toDateString());
        //        } catch (BindingResolutionException $e) {
        //        }

        return $res;
    }
}
