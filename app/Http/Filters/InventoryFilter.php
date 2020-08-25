<?php


namespace App\Http\Filters;


class InventoryFilter extends BaseFilter
{
    /**
     * @param string $name
     */
    public function productName(int $name)
    {
        $this->builder->where('product_id', 'like', '%' . $name .'%');
    }
}
