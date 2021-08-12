<?php

namespace App\Services;

class ReportService
{
    public static function generateMetaData($newOrdersQuery)
    {
        $newOrdersForComputation = clone $newOrdersQuery;
        // $newOrdersToBeGrouped = clone $newOrdersQuery->get();
        $totalSales = $newOrdersQuery->count();
        $totalRevenue = $newOrdersQuery->avg('product_price') * $totalSales;
        $additional = self::groupOrderByBranchName(clone $newOrdersQuery, $totalRevenue);
        $totalAltaraPay = self::getNoOfAltaraPayProduct(clone $newOrdersForComputation);
        $totalAltaraCash = self::getNoOfAltaraCashProduct(clone $newOrdersForComputation);
        //to prevent division by zero error
        $revenuePerSale = $totalRevenue / ($totalSales ?: 1);
        $additional = $additional->put('altaraPayVersusAltaraCash', self::getComparismOfAltaraPayVsAltaraCash($totalAltaraCash, $totalAltaraPay, $totalSales));
        $additional = $additional->put('total_no_sales', $totalSales);
        $additional = $additional->put('total_revenue', number_format($totalRevenue, 2));
        $additional = $additional->put('revenue_per_sale', number_format($revenuePerSale, 2));
        return $additional;
    }

    private static function groupOrderByBranchName($newOrdersToBeGrouped, $totalRevenue)
    {
        $newOrdersToBeGroupedClone = clone $newOrdersToBeGrouped;
        $ordersGroupedByBranch =   $newOrdersToBeGrouped->get()->groupBy('branch.name');
        return  $ordersGroupedByBranch->map(function ($item, $key) use ($totalRevenue, $newOrdersToBeGroupedClone) {
            $totalPotentialRevenuePerShowroom = $item->avg('product_price') * count($item);
            $percentageOfTotalRevenue = $totalPotentialRevenuePerShowroom / $totalRevenue * 100;
            $countPay = self::getNoOfAltaraPayProductPerBranch(clone $newOrdersToBeGroupedClone, $item[0]->branch->id);
            $countCash = self::getNoOfAltaraCashProductPerBranch(clone $newOrdersToBeGroupedClone, $item[0]->branch->id);
            return [
                'branch_id' => $item[0]->branch->id,
                'branch_name' => $item[0]->branch->name,
                'avg_price_of_prod_per_showroom' => number_format($item->avg('product_price'), 2),
                'total_potential_revenue_sold_per_showroom' => number_format($totalPotentialRevenuePerShowroom, 2),
                'number_of_sales' => count($item),
                'percentage_of_total_revenues' => number_format($percentageOfTotalRevenue, 3),
                'no_of_altara_pay' => $countPay,
                'no_of_altara_cash' => $countCash,
            ];
        });
    }

    private static function getNoOfAltaraPayProduct($newOrdersForComputation)
    {
        return $newOrdersForComputation->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Pay%');
        })->count();
    }

    private static function getNoOfAltaraPayProductPerBranch($newOrdersForComputation, $branch_id)
    {
        return $newOrdersForComputation->where('branch_id', $branch_id)->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Pay%');
        })->count();
    }
    private static function getNoOfAltaraCashProductPerBranch($newOrdersForComputation, $branch_id)
    {
        return $newOrdersForComputation->where('branch_id', $branch_id)->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Credit%');
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
            'percentage_of_sales_altara_pay' => number_format(($totalAltaraPay / $totalSales) * 100, 2),
            'percentage_of_sales_altara_cash' => number_format(($totalAltaraCash / $totalSales) * 100, 2)
        ];
    }
}
