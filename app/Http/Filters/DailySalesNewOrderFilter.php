<?php

namespace App\Http\Filters;

use Carbon\Carbon;

class DailySalesNewOrderFilter extends BaseFilter
{
    /**
     * @param string $from
     * @param string $column
     */
    public function fromDate(string $date, $column = 'order_date')
    {
        $toDate = request('toDate') ?? Carbon::now();
        $fromDate = request('fromDate') ?? Carbon::now()->subDays(30);
        $toDate = Carbon::parse($toDate);
        $fromDate = Carbon::parse($fromDate);
        $differenceInDates = $toDate->diff($fromDate);
        $differenceInDays = abs($differenceInDates->days);
        $from = clone $fromDate;
        if ($differenceInDays > 30  || $differenceInDays < 30) {
            $toDate = $from->addDays(30);
        }
        $this->builder->whereBetween($column, [$fromDate->format('Y-m-d'), $toDate->format('Y-m-d')]);
    }
}
