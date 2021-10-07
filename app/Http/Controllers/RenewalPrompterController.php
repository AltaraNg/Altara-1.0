<?php

namespace App\Http\Controllers;

use App\Http\Filters\NewOrderFilter;
use App\Repositories\NewOrderRepository;
use Illuminate\Http\Request;

class RenewalPrompterController extends Controller
{
    //
    private $newOrderRepository;
    public function __construct(NewOrderRepository $newOrderRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
    }

    public function index(NewOrderFilter $newOrderFilter)
    {
      $newOrdersWithComplete =  $this->newOrderRepository->reportQuery($newOrderFilter)
      ->whereHas('amortization', function ($query)
      {
          $query->where('actual_payment_date', '!=', null);
      })->select('new_orders.id'); 
      
    }
}
