<?php

namespace App\Http\Controllers;

use App\Helper\InventoryHelper;
use App\Http\Filters\InventoryFilter;
use App\Http\Requests\InventoryRequest;
use App\Imports\InventoriesImport;
use App\Models\Inventory;
use App\Models\InventoryStatus;
use App\Models\Product;
use App\Repositories\InventoryRepository;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Request;
use Maatwebsite\Excel\Facades\Excel;

class InventoryController extends Controller
{

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

    /**
     * @param InventoryFilter $filter
     * @param InventoryHelper $inventoryHelper
     * @return Response
     */
    public function summary(InventoryFilter $filter, InventoryHelper $inventoryHelper)
    {

        $inventories = $this->inventoryRepo->getSummary($filter);
        $products = $inventoryHelper->transform($inventories);

        $summary = $inventoryHelper->getSummary($inventories);

        return $this->sendSuccess(['products' => $products, 'summary' => $summary],'Action Request Successful');
    }

    /**
     * @return Response
     */
    public function uploadSheet()
    {
        // Excel::import(new InventoriesImport(), 'Inv.xlsx', 's3');
        Excel::import(new InventoriesImport(),Request::file('file'));

        return $this->sendSuccess([],'Inventory Updated successfully');
    }
}
