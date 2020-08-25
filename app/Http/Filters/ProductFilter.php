<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class ProductFilter extends BaseFilter
{
    /**
     * @param int $id
     */
    public function brand(int $id)
    {
        $this->builder->where('brand_id', $id);
    }
}
