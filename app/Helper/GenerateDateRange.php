<?php

namespace App\Helper;
use DatePeriod;
use Carbon\Carbon;
use Carbon\CarbonInterval;

trait GenerateDateRange
{
    /**
     * Compute a range between two dates, and generate
     * a plain array of Carbon objects of each day in it.
     *
     * @param  \Carbon\Carbon  $from
     * @param  \Carbon\Carbon  $to
     * @param  bool  $inclusive
     * @return array|null
     *
     * @author Taofeeq Adewuyi
     */
    public function date_range(Carbon $from, Carbon $to, string $format, $inclusive = true)
    {
        if ($from->gt($to)) {
            return null;
        }

        // Clone the date objects to avoid issues, then reset their time
        $from = $from->copy()->startOfDay();
        $to = $to->copy()->startOfDay();

        // Include the end date in the range
        if ($inclusive) {
            $to->addDay();
        }

        $step = CarbonInterval::day();
        $period = new DatePeriod($from, $step, $to);

        // Convert the DatePeriod into a plain array of Carbon objects
        $range = [];

        foreach ($period as $day) {
            if ($format) {
                $range[] = (new Carbon($day))->format($format);
            } else {
                $range[] = new Carbon($day);
            }
        }

        return !empty($range) ? $range : null;
    }

}
