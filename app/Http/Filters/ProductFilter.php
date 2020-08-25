<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class ProductFilter extends BaseFilter
{
    public function category(int $category_id){
        $this->builder->where('category_id', $category_id);
    }

    public function productType(int $product_type_id){
        $this->builder->where('product_type_id', $product_type_id);
    }
    /**
     * @param int $id
     */
    public function brand(int $id)
    {
        $this->builder->where('brand_id', $id);
    }
}
