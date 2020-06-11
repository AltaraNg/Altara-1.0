<?php


namespace App\Amortization;

use Carbon\Carbon;

class Custom extends Amortization
{
    public function getRepaymentDate(int $count)
    {
        $today = Carbon::today();
        return $today->addMonth($count);
    }
}
