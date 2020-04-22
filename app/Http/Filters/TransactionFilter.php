<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class TransactionFilter extends QueryFilter
{
    /**
     * @param string $status
     */
    public function branch(int $status)
    {
        $this->builder->where('branch_id', $status);
    }
}
