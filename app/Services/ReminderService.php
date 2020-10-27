<?php

namespace App\Services;

use App\Customer;
use Carbon\Carbon;

class ReminderService
{
    public function fetchCustomers($days)
    {
        //get list of customers based on their repayment date
        $data = Customer::whereIn('id', function ($query) use ($days) {
            $query->select('customer_id')
                ->from('new_orders')
                ->whereIn('id', function ($query) use ($days) {
                $today = Carbon::now();
                $query->select('new_order_id')
                    ->from('amortizations')
                    ->whereDate('expected_payment_date', $today->subDays($days)->toDateString())
                    ->where('actual_payment_date', NULL);
            });
        });

        return $data->get();
    }
}
