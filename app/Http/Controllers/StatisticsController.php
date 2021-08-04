<?php

namespace App\Http\Controllers;

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
    public function getAveragePriceOfProductSoldPerShowRoom()
    {
        $data = DB::table('new_orders')->join('branches', 'new_orders.branch_id', '=', 'branches.id')->select(DB::raw('round(AVG(product_price),2) as product_price'), 'branches.name','branch_id')->groupBy('branch_id')->get();
        return $data;
    }
    public function getTotalPotentialRevenueOfProductSoldPerShowRoom()
    {
        $data = DB::table('new_orders')->join('branches', 'new_orders.branch_id', '=', 'branches.id')->select(DB::raw('round(AVG(product_price),2) * COUNT(owner_id) as potential_revenue'), 'branches.name','branch_id')->groupBy('branch_id')->get();
        // $data = DB::table('new_orders')->join('branches', 'new_orders.branch_id', '=', 'branches.id')->select('branches.name','branch_id', DB::raw('COUNT(owner_id) as count'))->groupBy('branch_id')->get();
        return $data;
    }
    public function getNumberOfSalesMadePerDay()
    {
        $data = DB::table('new_orders')->select('order_date',DB::raw('COUNT(owner_id) no_of_sales'))->groupBy('order_date')->get();
        return $data;
    }
}
