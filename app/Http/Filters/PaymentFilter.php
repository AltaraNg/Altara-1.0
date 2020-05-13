<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class PaymentFilter extends BaseFilter
{
    /**
     * @param int $id
     */
    public function method(int $id)
    {
        $this->builder->where('payment_method_id', $id);
    }
}
