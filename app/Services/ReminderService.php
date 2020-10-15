<?php

namespace App\Services;

use App\Amortization;
use App\Customer;
use Carbon\Carbon;
use App\Exceptions\AException;
use App\Helper;
use App\NewOrder;
use Illuminate\Support\Facades\DB;

class ReminderService
{
    public function fetchCustomers($days)
    {
        //get list of customers based on their repayment date


        try {
            $today = Carbon::now();
            $customers = DB::table('amortizations')
                ->join('new_orders', 'amortizations.new_order_id', '=', 'new_orders.id')
                ->join('customers', 'new_orders.customer_id', '=', 'customers.id')
                ->select('customer_id')
                ->distinct()
                ->where(function ($q) use ($today, $days) {
                    $q->where('expected_payment_date', '<=', $today->addDays($days))
                        ->where('actual_payment_date', null);
                })->get();



            $customer_array = array();
            foreach ($customers as $customer) {
                $customer_array[] = $this->getCustomer($customer->customer_id);
            }
        } catch (\Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }
        return $customer_array;
    }

    public function getCustomer($id)
    {
        try {
            //code...
            return Customer::find($id);
        } catch (\Exception $e) {
            //throw $th;
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
