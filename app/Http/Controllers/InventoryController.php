<?php

namespace App\Http\Controllers;

use App\Http\Requests\InventoryRequest;
use App\Inventory;
use App\Repositories\InventoryRepository;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    //

    private $inventoryRepo;

    public function __construct(InventoryRepository $inventoryRepository)
    {
        $this->inventoryRepo = $inventoryRepository;
    }

    public function index(InventoryController $filter)
    {
        $inventories = $this->inventoryRepo->all();

        return $this->sendSuccess($inventories->toArray(), 'Inventory retrieved successfully');
    }

    public function show(Inventory $inventory)
    {
        return $this->sendSuccess($inventory->toArray(), 'Inventory retrieved successfully');
    }

    public function store(InventoryRequest $request)
    {
        $inv = $this->inventoryRepo->store($request->validated());
        $inv->sku = '';

        $inv->update();

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
