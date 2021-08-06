<?php

namespace App\Http\Controllers;

use App\Http\Filters\NewOrderFilter;
use App\NewOrder;
use App\Repositories\NewOrderRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    //
    private $newOrderRepository;

    public function __construct(NewOrderRepository $newOrderRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
    }

    public function index(NewOrderFilter $filter)
    {
        $newOrdersQuery = $this->newOrderRepository->query($filter)->latest();
        $newOrders = clone $newOrdersQuery->get();
        $orders =  $newOrders->groupBy('branch.name');
        $additional =  $orders->map(function ($item, $key) {
            return [
                'branch_name' => $item[0]->branch->name,
                'avg_price_of_prod_per_show_room' => number_format($item->avg('product_price'), 2),
                'total_potential_revenue_sold_per_showroom' => number_format($item->avg('product_price') * count($item),2),
                'number_of_sales' => count($item),
            ];
        });
        $additional = $additional->put('total_no_sales', count($newOrders));

        return $this->sendSuccess([$newOrdersQuery->paginate((int)request('limit', 10)), "meta" => $additional], 'Orders retrieved successfully');
    }
}
