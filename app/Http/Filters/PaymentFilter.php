<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class PaymentFilter extends QueryFilter
{
    /**
     * @param string $status
     */
    public function branch(int $status)
    {
        $this->builder->where('branch_id', $status);
    }
}
