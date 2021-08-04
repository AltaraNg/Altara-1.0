<?php


namespace App\Amortization;

use Carbon\Carbon;

class Monthly extends Amortization
{
    public function getRepaymentDate(int $count)
    {
        $today = Carbon::today();
        return $today->addDays($this->repaymentCircle() * $count);
    }
}
