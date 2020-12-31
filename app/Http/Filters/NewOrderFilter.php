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

    /**
     * @param string $date
     */
    public function startDate($date)
    {
        $this->builder->whereHas('amortization', function ($query) use ($date) {
            $selectedDay = Carbon::parse($date) ?? Carbon::now();
            $query->select('new_order_id')
                ->from('amortizations')
                ->whereDate('expected_payment_date', $selectedDay->subDays($this->fields()['days'] ?? 2)->toDateString())
                ->where('actual_payment_date', NULL);
        });
    }

    /**
     * @param int $days
     */
    public function days(int $days)
    {
        $this->builder->whereHas('amortization', function ($query) use ($days) {
            $selectedDay = Carbon::parse($this->fields()['startDate'] ?? null) ?? Carbon::now();
            $query->select('new_order_id')
                ->from('amortizations')
            ->whereDate('expected_payment_date', '<=', $selectedDay->subDays($days)->toDateString())
                ->where('actual_payment_date', NULL);
        });
    }

    /**
     * @param string $type
     */
    public function type(string $type)
    {
        $this->builder->whereHas('notifications', function ($query) use ($type) {
            $query->select('notifiable_id')
                ->from('notifications')
                ->where('data->type', $type)
                ->where('notifiable_type', 'App\NewOrder');
        });
    }

    /**
     * @param string $status
     */
    public function status(string $status)
    {
        $this->builder->whereHas('notifications', function ($query) use ($status) {
            $query->select('notifiable_id')
                ->from('notifications')
                ->where('data->status', $status)
                ->where('notifiable_type', 'App\NewOrder');
        });
    }

    public function businessType(int $type)
    {
        $this->builder->whereHas('businessType', function ($query) use ($type) {
            $query->select('business_type_id')
            ->from('business_types')
            ->where('id', $type);
        });
    }
}
