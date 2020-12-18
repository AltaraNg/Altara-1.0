<?php

namespace App\Services;


use App\NewOrder;
use App\Notifications\CallReminder;
use App\Notifications\Collection;
use App\Notifications\Models\CallReminderModel;
use Carbon\Carbon;

class ReminderService
{
    public function fetchOrders($days = 7, $date = null)
    {
        //get list of customers based on their repayment date
        $data = NewOrder::whereIn('id', function ($query) use ($days, $date) {
            $today = Carbon::parse($date) ?? Carbon::now();
            $query->select('new_order_id')
                ->from('amortizations')
            ->whereDate('expected_payment_date', '<=', $today->subDays($days)->toDateString())
                ->where('actual_payment_date', NULL);
        });

        return $data->get();
    }

    public function saveCallNotifications($data)
    {
        $order = NewOrder::find($data['order_id']);
        $callReminder = new CallReminderModel($data['type'], $data['feedback'], $data['status'] , $data['promise_date']);
        $order->notify(new CallReminder($callReminder));
        $order->customer->notify(new CallReminder($callReminder));
    }

    public function saveCollectionNotifications($data)
    {
        $order = NewOrder::findOrFail($data['order_id']);
        $order->notify(new Collection($data));
    }
}
