<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class ProductTransferFilter extends BaseFilter
{
    /**
     * @param int $id
     */
    public function product(int $id)
    {
        $this->builder->where('product_id', $id);
    }
}
