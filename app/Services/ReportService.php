<?php

namespace App\Services;

class ReportService
{
    static function generateMetaData($newOrdersQuery)
    {
        $newOrdersForComputation = clone $newOrdersQuery;
        $newOrdersToBeGrouped = clone $newOrdersQuery->get();
        $ordersGroupedByBranch =  $newOrdersToBeGrouped->groupBy('branch.name');
        $additional =  $ordersGroupedByBranch->map(function ($item, $key) {
            return [
                'branch_name' => $item[0]->branch->name,
                'avg_price_of_prod_per_show_room' => number_format($item->avg('product_price'), 2),
                'total_potential_revenue_sold_per_showroom' => number_format($item->avg('product_price') * count($item), 2),
                'number_of_sales' => count($item),
            ];
        });
        $totalAltaraPay = (clone $newOrdersForComputation)->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Pay%');
        })->count();
        $totalAltaraCash = (clone $newOrdersForComputation)->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Credit%');
        })->count();
        $totalSales = count($newOrdersToBeGrouped);
        $totalRevenue = $newOrdersToBeGrouped->avg('product_price') * $totalSales;
        $revenuePerSale = $totalRevenue / $totalSales;
        $additional = $additional->put('altaraPayVersusAltaraCash', [
            'no_of_sales_altara_cash' => $totalAltaraCash,
            'no_of_sales_altara_pay' => $totalAltaraPay,
            'percentage_of_sales_altara_pay' => number_format(($totalAltaraPay / $totalSales) * 100, 2),
            'percentage_of_sales_altara_cash' => number_format(($totalAltaraCash / $totalSales) * 100, 2)
        ]);
        $additional = $additional->put('total_no_sales', $totalSales);
        $additional = $additional->put('total_revenue', number_format($totalRevenue, 2));
        $additional = $additional->put('revenue_per_sale', number_format($revenuePerSale, 2));
        return $additional;
    }
}
