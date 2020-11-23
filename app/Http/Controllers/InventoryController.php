<?php

namespace App\Http\Controllers;

use App\Http\Filters\InventoryFilter;
use App\Http\Requests\InventoryRequest;
use App\Inventory;
use App\InventoryStatus;
use App\Product;
use App\Repositories\InventoryRepository;

class InventoryController extends Controller
{
    //

    private $inventoryRepo;

    public function __construct(InventoryRepository $inventoryRepository)
    {
        $this->inventoryRepo = $inventoryRepository;
    }

    public function index(InventoryFilter $filter)
    {
        $inventories = $this->inventoryRepo->getAll($filter);

        return $this->sendSuccess($inventories->toArray(), 'Inventory retrieved successfully');
    }

    public function show(Inventory $inventory)
    {
        return $this->sendSuccess($inventory->toArray(), 'Inventory retrieved successfully');
    }

    public function store(InventoryRequest $request)
    {
        $data = array_merge($request->validated(),
            [
                'inventory_sku' => Inventory::getInventorySku(),
                'inventory_status_id' => InventoryStatus::where('status', InventoryStatus::AVAILABLE)->first()->id,
                'product_name' => Product::find($request->validated()['product_id'])->name
            ]);
        $inv = $this->inventoryRepo->store($data);

        return $this->sendSuccess($inv->toArray(), 'Inventory Successfully Created');
    }

    public function update(Inventory $inventory, InventoryRequest $request)
    {
        $inventory = $this->inventoryRepo->update($inventory, $request->validated());

        return $this->sendSuccess($inventory->toArray(), 'Inventory updated successfully');
    }

    public function destroy(Inventory $inventory)
    {
        $inventory->delete();

        return $this->sendSuccess([],'Inventory deleted successfully');
    }
}
