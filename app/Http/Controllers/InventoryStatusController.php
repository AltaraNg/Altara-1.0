<?php

namespace App\Http\Controllers;

use App\Repositories\InventoryStatusRepository;
use Illuminate\Http\Request;

class InventoryStatusController extends Controller
{
    //

    private $inventoryStatusRepo;

    public function __construct(InventoryStatusRepository $inventoryStatusRepository)
    {
        $this->inventoryStatusRepo = $inventoryStatusRepository;
    }

    public function index()
    {
        $inventoryStatus = $this->inventoryStatusRepo->all();

        return $this->sendSuccess($inventoryStatus->toArray(), 'Inventory retrieved successfully');
    }
}
