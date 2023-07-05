<?php

namespace App\Http\Controllers;

use App\Repositories\OrderTypeRepository;

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
