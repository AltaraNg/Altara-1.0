<?php

namespace App\Http\Controllers;

use App\Repositories\OrderStatusRepository;
use Illuminate\Http\Request;

class OrderStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $orderStatusRepository;

    public function __construct(
        OrderStatusRepository $orderStatusRepository
    ) {
        $this->orderStatusRepository = $orderStatusRepository;

    }
    public function index()
    {
        //
        $orderStatus = $this->orderStatusRepository->all();
        return $this->sendSuccess($orderStatus->toArray(), 'Order Status retrieved successfully');
    }  
}