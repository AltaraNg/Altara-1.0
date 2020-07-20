<?php


namespace App\Amortization;

use Carbon\Carbon;

class Custom extends Amortization
{
    protected $startMonth;
    protected const ALLOWANCE = 15;

    public function __construct($order)
    {
        parent::__construct($order);
        Carbon::useMonthsOverflow(false);
        $this->startMonth = $this->getStartMonth();
    }

    public function getRepaymentDate(int $count)
    {
        $date = Carbon::createFromDate(null, $this->startMonth, 28);
        $date->addMonth($count);
        $date->day(($this->order->custom_date > $date->daysInMonth) ? $date->daysInMonth: $this->order->custom_date);
        return $date;
    }

    private function getStartMonth(){
        $selectedDate =  Carbon::createFromDate(null, null, $this->order->custom_date);

        $diff = now()->diffInDays($selectedDate, false);
        if ($diff > self::ALLOWANCE){
            return now()->subMonth(1)->month;
        }
        return now()->month;
    }
}
