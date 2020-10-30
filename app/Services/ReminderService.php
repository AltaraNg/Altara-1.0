<?php

namespace App\Services;

use App\Customer;
use App\NewOrder;
use Carbon\Carbon;

class ReminderService
{
    public function fetchOrders($days)
    {
        //get list of customers based on their repayment date
        // dd('I am here');
        $data = NewOrder::whereIn('id', function ($query) use ($days) {
            $today = Carbon::now();
            $query->select('new_order_id')
                ->from('amortizations')
                ->whereDate('expected_payment_date', $today->subDays($days)->toDateString())
                ->where('actual_payment_date', NULL);
        });
        // dd('I am here');

        return $data->get();
    }
}
