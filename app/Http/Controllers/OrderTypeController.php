<?php

namespace App\Http\Controllers;

use App\OrderType;
use App\Repositories\OrderTypeRepository;
use Illuminate\Http\Request;

class OrderTypeController extends Controller
{
    //
    private $orderTypeRepo;

    public function __construct(OrderTypeRepository $orderTypeRepository)
    {
        $this->orderTypeRepo = $orderTypeRepository;
    }


    public function index()
    {
        return response()->json([
            'orderTypes' => $this->orderTypeRepo->all()
         ]);
    }
}
