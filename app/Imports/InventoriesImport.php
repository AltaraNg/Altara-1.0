<?php

namespace App\Imports;

use App\Models\Branch;
use App\Models\Inventory;
use App\Models\InventoryDictionary;
use App\Models\InventoryStatus;
use App\Models\Product;
use App\Models\Supplier;
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
        $branches = Branch::all();
        $supplier_id = Supplier::first()->id;
        $inventory_id = InventoryStatus::where('status', InventoryStatus::AVAILABLE)->first()->id;

        foreach ($collection as $row) {
            foreach ($branches as $branch) {
                $branchName = Str::snake(str_replace('-', " ", $branch->name));
                if (array_key_exists($branchName, $row->toArray()) && $row[$branchName] > 0){
                    if (!$product = Product::where('name', $row['product_name'])->first()){
                        continue;
                    }

                    $invDic = InventoryDictionary::firstOrCreate(
                        ['product_id' => $product->id, 'branch_id' => $branch->id],
                        ['quantity' => 0]
                    );

                    $target = $row[$branchName] - $invDic->quantity;

                    $all = [];

                    for ($i = 0; $i < $target; $i++) {
                        $data = [
                            'price' => $product->retail_price,
                            'product_id' => $product->id,
                            'product_name' => $product->name,
                            'receiver_id' => auth()->user()->id,
                            'supplier_id' => $supplier_id,
                            'inventory_sku' => Inventory::getInventorySku(),
                            'received_date' => Carbon::today()->toDateString(),
                            'inventory_status_id' => $inventory_id,
                            'branch_id' => $branch->id,
                        ];

                        $all[] = $data;
                    }

                    if (count($all)) {
                        Inventory::insert($all);

                        $invDic->update(["quantity" => $row[$branchName]]);
                    }
                }
            }
        }
    }
}
