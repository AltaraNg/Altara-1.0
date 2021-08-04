<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class ProductFilter extends BaseFilter
{
    /**
     * @param string $category
     */
    public function category(string $category){
        $this->builder->whereHas('category', function ($query) use ($category) {
            $query->where('name', 'like', '%' . $category .'%');
        });
    }

    /**
     * @param string $brand
     */
    public function brand(string $brand)
    {
        $this->builder->whereHas('brand', function ($query) use ($brand) {
            $query->where('name', 'like', '%' . $brand .'%');
        });
    }
}
