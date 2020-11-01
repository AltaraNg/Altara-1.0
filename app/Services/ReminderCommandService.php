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
        // dd($orders);
        $res = array();
        if (!empty($orders)) {
            foreach ($orders as $order) {
                # code...
                try {
                    $res[] = $order->customer->notify(new SmsReminder(['message' => 'Ogbeni go and pay']));
                    // $res = $order->customer;
                    $order->notify(new SmsReminderSent(['message' => 'Ogbeni go and pay', 'status' => 'success']));
                } catch (\Exception $e) {
                    dump($e->getMessage());
                }

            }




            return $res;
        } else {
            return 'No Customers are available';
        }
    }
}
