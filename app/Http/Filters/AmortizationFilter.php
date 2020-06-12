<?php

namespace App\Http\Filters;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class AmortizationFilter extends BaseFilter
{

    /**
     * @param int $day
     */
    public function paymentLeft(int $day)
    {
        $date = Carbon::today()->subDays($day);
        $this->builder->where('expected_payment_date', $date)
        ->where('actual_amount', '<', 1);
    }

    /**
     * @param int $count
     */
    public function rePayment(int $count)
    {
//        dd(12);
        $this->builder
            ->where('actual_amount', '<', 1)
            ->distinct()->count('new_order_id');
    }
}
