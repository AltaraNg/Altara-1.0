<?php

namespace App\Http\Filters;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class PaymentListFilter extends QueryFilter
{
    /**
     * @param int $id
     */
    public function branch(int $id)
    {
        $this->builder->where('branch_id', $id);
    }

    /**
     * @param string $date
     */
    public function date(string $date)
    {
        $this->builder->whereDate('created_at', $date);
    }

    /**
     * @param string $from
     */
    public function from(string $from)
    {
        $this->builder->whereDate('created_at', '>=', $from)
            ->whereDate('created_at', '<=',$this->request->to ?? Carbon::now());
    }
}
