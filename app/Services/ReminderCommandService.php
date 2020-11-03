<?php

namespace App\Services;

use App\Helper\Constants;
use App\Notifications\Models\SmsReminderModel;
use App\Notifications\SmsReminder;
use App\Notifications\SmsReminderSent;
use Carbon\Carbon;

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
        $orders = $this->reminderService->fetchOrders($days, $date);

        $res = array();
        if (empty($orders)) {
            return 'No Customers are available';
        }
        foreach ($orders as $order) {
                # code...
                $message = strtr(Constants::$reminderMessages[$type], $order->toArray());
                $item = [
                    'customer_id' => $order->customer_id,
                    'customer_name' => $order->customer->full_name,
                    'order_id' => $order->order_number,
                    'message' => $message,
                ];

                try {
                    $reminderObject = new SmsReminderModel($message, $type);
                    $order->customer->notify(new SmsReminder($reminderObject));
                    $res[] = array_merge($item, [
                        'status' => 'success',
                        'statusMessage' => 'Message sent Successfully'
                    ]);

                    $order->notify(new SmsReminderSent($reminderObject));
                } catch (\Exception $e) {
                    $res[] = array_merge($item, [
                        'status' => 'failed',
                        'statusMessage' => $e->getMessage()
                    ]);
                }

            }

            # send report mail
            $this->mailService->sendReportAsMail($days .'days sms reminder', $res,
                config('app.operations_email'), 'Sms Reminder Report',
                'SmsReminder', 'Sms Reminder report for ' . Carbon::parse($date)->toDateString());

            return $res;

    }
}
