<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class NewOrdersReportService
{
    public  function generateMetaData($newOrdersQuery)
    {
        $newOrdersForComputation = clone $newOrdersQuery;
        $additional = collect([]);
        $totalSales = $newOrdersQuery->count();
        $totalRevenue = $newOrdersQuery->avg('product_price') * $totalSales;
        $additional = $additional->put('groupedDataByBranch', $this->groupOrderByBranchName(clone $newOrdersQuery, $totalRevenue));
        $totalAltaraPay = $this->getNoOfAltaraPayProduct(clone $newOrdersForComputation);
        $totalAltaraCash = $this->getNoOfAltaraCashProduct(clone $newOrdersForComputation);
        //to prevent division by zero error
        $revenuePerSale = $totalRevenue / ($totalSales ?: 1);
        $additional = $additional->put('altaraPayVersusAltaraCash', $this->getComparismOfAltaraPayVsAltaraCash($totalAltaraCash, $totalAltaraPay, $totalSales));
        $additional = $additional->put('total_no_sales', $totalSales);
        $additional = $additional->put('total_revenue', number_format($totalRevenue, 2));
        $additional = $additional->put('revenue_per_sale', number_format($revenuePerSale, 2));
        return $additional;
    }

    private  function groupOrderByBranchName($newOrdersToBeGrouped, $totalRevenue)
    {
        $newOrdersToBeGroupedClone = clone $newOrdersToBeGrouped;
        $ordersGroupedByBranch =   $newOrdersToBeGrouped->join('branches', 'new_orders.branch_id', '=', 'branches.id')
            ->join('business_types', 'new_orders.business_type_id', '=', 'business_types.id')
            ->select(
                'branches.name',
                'branches.id',
            DB::raw("count(*) as number_of_sales, 
            round(AVG(product_price), 2) as avg_price_of_prod_per_showroom, 
            round(AVG(product_price), 2) * count(*)  as total_potential_revenue_sold_per_showroom
            "))
            ->groupBy('branch_id')->get();
            // return $ordersGroupedByBranch;

            foreach ($ordersGroupedByBranch as $key => $value) {
               
            }
        return  $ordersGroupedByBranch->map(function ($item, $key) use ($totalRevenue, $newOrdersToBeGroupedClone) {
            $percentageOfTotalRevenue = $item->total_potential_revenue_sold_per_showroom / $totalRevenue * 100;
            $countPay = $this->getNoOfAltaraPayProductPerBranch(clone $newOrdersToBeGroupedClone, $item->id);
            $countCash = $this->getNoOfAltaraCashProductPerBranch(clone $newOrdersToBeGroupedClone, $item->id);
            return [
                'percentage_of_total_revenues' => number_format($percentageOfTotalRevenue, 3),
                'no_of_altara_pay' => $countPay,
                'no_of_altara_cash' => $countCash,
            ];
        });
    }

    private  function getNoOfAltaraPayProduct($newOrdersForComputation)
    {
        return $newOrdersForComputation->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Pay%');
        })->count();
    }

    private  function getNoOfAltaraPayProductPerBranch($newOrdersForComputation, $branch_id)
    {
        return $newOrdersForComputation->where('branch_id', $branch_id)->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Pay%');
        })->count();
    }
    private  function getNoOfAltaraCashProductPerBranch($newOrdersForComputation, $branch_id)
    {
        return $newOrdersForComputation->where('branch_id', $branch_id)->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Credit%');
        })->count();
    }

    private  function getNoOfAltaraCashProduct($newOrdersForComputation)
    {
        return $newOrdersForComputation->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Credit%');
        })->count();
    }


    private  function getComparismOfAltaraPayVsAltaraCash($totalAltaraCash, $totalAltaraPay, $totalSales)
    {
        //prevent zero division
        $totalSales = $totalSales ?: 1;
        return [
            'no_of_sales_altara_cash' => $totalAltaraCash,
            'no_of_sales_altara_pay' => $totalAltaraPay,
            'percentage_of_sales_altara_pay' => number_format(($totalAltaraPay / $totalSales) * 100, 2),
            'percentage_of_sales_altara_cash' => number_format(($totalAltaraCash / $totalSales) * 100, 2)
        ];
    }
}
// SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
// select * from `new_orders` group by `branch_id` order by `created_at` desc;