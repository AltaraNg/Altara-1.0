<?php


namespace App\Amortization;

use Carbon\Carbon;

class Custom extends Amortization
{
    protected $date;

    public function getRepaymentDate(int $count)
    {
        $date = $this->getDate();
        return $date->addMonth($count);
    }

    private function getDate(){
       $selectedDate =  Carbon::createFromDate(null, null, $this->order->customDate->custom_date);
        $diff = now()->diffInDays($selectedDate, false);
        if(now()->day >= $this->order->customDate->custom_date){
            return $selectedDate;
        }
        if ($diff > 5){
            return $selectedDate->subMonth(1);
        }
        return $selectedDate;
    }
}
