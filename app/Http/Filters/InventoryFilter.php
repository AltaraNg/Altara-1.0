<?php


namespace App\Http\Filters;

use App\InventoryStatus;
use Carbon\Carbon;

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

    public function salesLogger($status)
    {
        // $this->builder->whereHas('inventoryStatus', function ($q) {
        //     $q->where('status', InventoryStatus::AVAILABLE)
        //         ->orWhere('status', InventoryStatus::REPOSSESSED);
        // });
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
    public function sku(string $sku)
    {
        $this->builder->where('inventory_sku', 'like', '%' . $sku . '%');
    }

    public function filterBranch() {
        if (!auth()->user()->isAdmin()){
            $this->builder->where('branch_id', request('branch', auth()->user()->branch_id));
        }
    }

    /**
     * @param string $from
     * @param string $column
     */
    public function startDate(string $from, $column=self::DATE)
    {
        $this->builder->whereDate($column, '>=', $from)
            ->whereDate($column, '<=',$this->request->endDate ?? Carbon::now());
    }
}
