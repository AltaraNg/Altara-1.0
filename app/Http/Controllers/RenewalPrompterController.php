<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Filters\NewOrderFilter;
use App\Repositories\NewOrderRepository;

class RenewalPrompterController extends Controller
{
    //
    private $newOrderRepository;
  
    public function __construct(NewOrderRepository $newOrderRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
    }
    //
    public function index(NewOrderFilter $filter)
    {
      //TODO
      //1. Create table  for renewal_status 
      //2. Create relationship between renewal status and orders
      //3. fetch all orders 
      //4. get count of all status update 
    }
}
