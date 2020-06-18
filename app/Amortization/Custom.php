<?php


namespace App\Amortization;

use Carbon\Carbon;

class Custom extends Amortization
{
    public function getRepaymentDate(int $count)
    {
        dd($this->order->customDate->custom_date);
        $today = Carbon::today();
        return $today->addMonth($count);
    }
}
