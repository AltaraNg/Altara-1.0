<?php

namespace App\Services;

use App\Helper\GenerateDateRange;
use App\NewOrder;
use Illuminate\Support\Facades\DB;
use App\Repositories\BranchRepository;
use App\Repositories\BusinessTypeRepository;

use Carbon\Carbon;

class ProductService
{
    use GenerateDateRange;
    private $branchRepo;

    public function __construct(BranchRepository $branchRepository)
    {
        $this->branchRepo = $branchRepository;
    }

    public function getProductByRanks($newOrdersQuery, $limit)
    {
        $newOrdersForComputation = clone $newOrdersQuery->whereHas('branch', function ($query) {
            $query->where('name', '!=', 'Ikoyi')->where('name', '!=', 'Challenge Warehouse')->where('name', '!=', 'Micro Alakia');
        });
        $totalSales = $newOrdersQuery->count();

        $list = collect([]);

        $list = $list->put('top_selling_products', $this->getNoOfSalesMadeOnEachProduct(clone $newOrdersForComputation, $totalSales, $limit, 'DESC'));
        $list = $list->put('least_selling_products', $this->getNoOfSalesMadeOnEachProduct(clone $newOrdersForComputation, $totalSales, $limit, 'ASC'));
        return $list;
    }
    private  function getNoOfSalesMadeOnEachProduct($newOrdersForComputation, $totalSales, $limit = 10, $order)
    {
        //prevent zero division
        $totalSales = $totalSales ?: 1;
        $query = $newOrdersForComputation->join('products', function ($join){
            $join->on('new_orders.product_id', '=', 'products.id')
            ->join('categories', function ($join){
                $join->on('products.category_id', '=', 'categories.id')
                ->where('categories.name', '!=', 'cash loan');
            });
        })
            ->select(
                'product_id',
                'products.name as product_name',
                'products.retail_price as retail_price',
                'products.category_id as category_id',
                DB::raw("count(*) as count"),

            )
            ->groupBy('product_id')->get()->map(function ($product) use ($totalSales) {
                return [
                    'product_name' => ucwords($product->product_name) ?? 0,
                    'product_retail_price' => $product->retail_price ?? 0,
                    'product_category_id' => $product->category_id ?? 0,
                    'product_count' => $product->count ?? 0,
                    'percentage' => number_format(($product->count / $totalSales) * 100, 2) ?? 0,
                ];
            });
        $result = $this->sortQuery($query, $order, $limit);
        return $result;
    }

    private function sortQuery($query, $order, $limit){
        $result = $order == 'ASC' ?  $query->sortBy('product_count')->take($limit)->values() : $query->sortByDesc('product_count')->take($limit)->values();
        return $result;
    }
}
