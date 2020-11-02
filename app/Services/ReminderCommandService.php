<?php

namespace App\Services;

use App\Notifications\SmsReminder;
use App\Notifications\SmsReminderSent;

class ReminderCommandService
{

    private $reminderService;

    public function __construct(ReminderService $reminderService)
    {
        $this->reminderService = $reminderService;

    }
    public function handle($days)
    {
        $orders = $this->reminderService->fetchOrders($days);
        $message = "First reminder on your dues";

        $res = array();
        if (empty($orders)) {
            return 'No Customers are available';
        }
        foreach ($orders as $order) {
                # code...
                try {
                $messageResult = $order->customer->notify(new SmsReminder(['message' => $message]));
                $res[] = [
                    'customer_id' => $order->customer->id,
                    'customer_name' => $order->customer->name,
                    'order_id' => $order->id,
                    'message' => $message,
                    'status' => 'success',
                    'statusMessage' => $messageResult
                ];

                $order->notify(new SmsReminderSent(['message' => $message, 'status' => 'success']));
                } catch (\Exception $e) {
                $res[] = [
                    'customer_id' => $order->customer->id,
                    'customer_name' => $order->customer->name,
                    'order_id' => $order->id,
                    'message' => $message,
                    'status' => 'failed',
                    'statusMessage' => $e->getMessage()
                ];
                    dump($e->getMessage());

                }

            }
            # send report mail




            return $res;

    }
}
