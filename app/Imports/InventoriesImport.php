<?php

namespace App\Imports;

use App\Branch;
use App\Inventory;
use App\InventoryStatus;
use App\Product;
use App\Supplier;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class InventoriesImport implements ToCollection, WithHeadingRow
{
    /**
     * @inheritDoc
     */
    public function collection(Collection $collection)
    {
        foreach ($collection as $row) {

            $branches = Branch::all();

            foreach ($branches as $branch) {
                $branchName = Str::snake(str_replace('-', " ", $branch->name));
                if (array_key_exists($branchName, $row->toArray()) && $row[$branchName] > 0){
                    if (!$product = Product::where('name', $row['product_name'])->first()){
                        return;
                    }
                    $count = $branch->inventories()
                        ->where('product_name', $product->name)
                        ->whereIn('inventory_status_id', function ($q){
                        $q->select('id')
                            ->from('inventory_statuses')
                            ->where('status', InventoryStatus::AVAILABLE);
                    })->count();

                    $target = $row[$branchName] - $count;
;
                    $all = [];
                    for ($i = 0; $i < $target; $i++) {
                        $inventory = new Inventory();
                        $inventory['price'] = $product->retail_price;
                        $inventory['product_id'] = $product->id;
                        $inventory['product_name'] = $product->name;
                        $inventory['receiver_id'] = auth()->user()->id;
                        $inventory['supplier_id'] = Supplier::first()->id;
                        $inventory['sku'] = '';
                        $inventory['received_date'] = Carbon::today()->toDateString();
                        $inventory['inventory_status_id'] = InventoryStatus::where('status', InventoryStatus::AVAILABLE)->first()->id;
                        $inventory['branch_id'] = $branch->id;
                        $data = $inventory->toArray();
                        unset($data['inventory_status']);
                        unset($data['transfers']);
                        unset($data['sold_date']);
                        unset($data['created_at']);
                        unset($data['updated_at']);
                        unset($data['id']);
                        $all[] = $data;
                    }
                    Inventory::insert($all);
                }
            }
        }
    }
}
