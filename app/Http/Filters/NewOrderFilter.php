<?php

namespace App\Http\Filters;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class NewOrderFilter extends BaseFilter
{
    /**
     * @param int $day
     */
    public function missedPayment(int $day)
    {
        $date = Carbon::today()->subDays($day);

        $this->builder->whereHas('amortization', function (Builder $query) use($date) {
            $query->where('expected_payment_date', $date)
                ->where('actual_amount', '<', 1);
        })->get();
    }

    /**
     * @param int $count
     */
    public function rePayment(int $count)
    {
        $this->builder->whereHas('amortization', function (Builder $query) {
            $query->where('actual_amount', '<', 1);
        }, '>=', $count)->get();
    }
}
