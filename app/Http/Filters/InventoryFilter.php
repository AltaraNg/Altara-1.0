<?php


namespace App\Http\Filters;

use App\InventoryStatus;

class InventoryFilter extends BaseFilter
{

    /**
     * @param bool $status
     */
    public function isActive($status)
    {
            $this->builder->whereHas('inventoryStatus', function ($q){
                $q->where('status', InventoryStatus::AVAILABLE);
            });
    }

    /**
     * @param int $status
     */
    public function status($status)
    {
        $this->builder->where('inventory_status_id', $status);
    }

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
