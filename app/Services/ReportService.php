<?php

namespace App\Services;

class ReportService
{
    public static function generateMetaData($newOrdersQuery)
    {
        $newOrdersForComputation = clone $newOrdersQuery;
        $newOrdersToBeGrouped = clone $newOrdersQuery->get();
        $additional = self::groupOrderByBranchName($newOrdersToBeGrouped);
        $totalAltaraPay = self::getNoOfAltaraPayProduct(clone $newOrdersForComputation);
        $totalAltaraCash = self::getNoOfAltaraCashProduct(clone $newOrdersForComputation);
        $totalSales = count($newOrdersToBeGrouped);
        $totalRevenue = $newOrdersToBeGrouped->avg('product_price') * $totalSales;
        //to prevent division by zero error
        $revenuePerSale = $totalRevenue / ($totalSales ?: 1);
        $additional = $additional->put('altaraPayVersusAltaraCash', self::getComparismOfAltaraPayVsAltaraCash($totalAltaraCash, $totalAltaraPay, $totalSales));
        $additional = $additional->put('total_no_sales', $totalSales);
        $additional = $additional->put('total_revenue', number_format($totalRevenue, 2));
        $additional = $additional->put('revenue_per_sale', number_format($revenuePerSale, 2));
        return $additional;
    }

    private static function groupOrderByBranchName($newOrdersToBeGrouped)
    {
        $ordersGroupedByBranch =  $newOrdersToBeGrouped->groupBy('branch.name');
        return  $ordersGroupedByBranch->map(function ($item, $key) {
            return [
                'branch_name' => $item[0]->branch->name,
                'avg_price_of_prod_per_show_room' => number_format($item->avg('product_price'), 2),
                'total_potential_revenue_sold_per_showroom' => number_format($item->avg('product_price') * count($item), 2),
                'number_of_sales' => count($item),
            ];
        });
    }

    private static function getNoOfAltaraPayProduct($newOrdersForComputation)
    {
        return $newOrdersForComputation->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Pay%');
        })->count();
    }

    private static function getNoOfAltaraCashProduct($newOrdersForComputation)
    {
        return $newOrdersForComputation->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Credit%');
        })->count();
    }


    private static function getComparismOfAltaraPayVsAltaraCash($totalAltaraCash, $totalAltaraPay, $totalSales)
    {
        //prevent zero division
        $totalSales = $totalSales ?: 1;
        return [
            'no_of_sales_altara_cash' => $totalAltaraCash,
            'no_of_sales_altara_pay' => $totalAltaraPay,
            'percentage_of_sales_altara_pay' => number_format(($totalAltaraPay / $totalSales) * 100, 2) ,
            'percentage_of_sales_altara_cash' => number_format(($totalAltaraCash / $totalSales) * 100, 2) 
        ];
    }
}
