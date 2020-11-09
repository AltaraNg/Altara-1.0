<?php


namespace App\Http\Filters;

class InventoryFilter extends BaseFilter
{
    /**
     * @param string $name
     */
    public function productName(string $name)
    {
        $this->builder->where('product_name', 'like', '%' . $name .'%');
    }

    public function filterBranch() {
        if (!auth()->user()->isAdmin()){
            $this->builder->where('branch_id', auth()->user()->branch_id);
        }
    }
}
