<?php

namespace App\Http\Controllers;

use App\NewOrder;
use Illuminate\Http\Request;
use App\Http\Filters\NewOrderFilter;
use App\Repositories\NewOrderRepository;
use Illuminate\Database\Eloquent\Builder;

class RenewalTrackerController extends Controller
{
    private $newOrderRepository;
  
    public function __construct(NewOrderRepository $newOrderRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
    }
    //
    public function index(NewOrderFilter $filter)
    {
        $newOrderQuery = $this->newOrderRepository->reportQuery($filter);
        return $newOrderQuery->whereHas('amortization', function ( $query)
        {
            $query->where('actual_payment_date', '!=', null);
        })->paginate(10);
    }
}
