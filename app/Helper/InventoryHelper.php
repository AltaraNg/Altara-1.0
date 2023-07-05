<?php
namespace App\Helper;


use App\Models\Inventory;
use App\Models\InventoryStatus;
use App\Models\Product;
use Illuminate\Support\Collection;

/**
 * LogHelper assists in writing log messages to file and sending emails.
 *
 * @author Adeniyi
 */
class InventoryHelper
{
    /**
     * Log the error to the log file and send an error message.
     *
     * @param $inventories
     * @return mixed
     */
    public function getSummary($inventories)
    {
        return [
            'total' => $inventories->count(),
            'total_worth' => $inventories->sum('price'),
            'total_sold' => $inventories->where('inventory_status_id', InventoryStatus::where('status', InventoryStatus::SOLD)->first()->id)->count(),
            'total_repossessed' => $inventories->where('inventory_status_id', InventoryStatus::where('status', InventoryStatus::REPOSSESSED)->first()->id)->count(),
            'total_transfer' => $inventories->sum('transfers_count')
        ];
    }

    /**
     * Log the error to the log file and send an error message.
     *
     * @param $inventories
     * @return mixed
     */
    public function transform($inventories)
    {
        $products = (new Product)->newCollection();

        foreach ($inventories as $inventory){

            if (!$products->contains('id', $inventory->product->id)) $products->add($inventory->product);
            $prod = $products->find($inventory->product->id);

            if(!isset($prod['invs'])) $prod['invs'] = new Collection();
            $prod['invs'][] = Inventory::find($inventory->id);
        }
        return $products;
    }
}
