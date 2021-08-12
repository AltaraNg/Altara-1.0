<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class NewOrdersReportService
{
    //array of ID's of renewalsales from salesCategories table
    private const RenewalSalesCategoryIDs = [2, 3];
    private const NewSalesCategoryIDs = [1, 4, 5, 6, 7];
    public  function generateMetaData(Builder $newOrdersQuery): Collection
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

    private  function groupOrderByBranchName(Builder $newOrdersToBeGrouped, $totalRevenue)
    {
        $newOrdersToBeGroupedClone = clone $newOrdersToBeGrouped;
        $ordersGroupedByBranch =   $newOrdersToBeGrouped->get()->groupBy('branch.name');
        return  $ordersGroupedByBranch->map(function ($item, $key) use ($totalRevenue,  $newOrdersToBeGroupedClone) {
            $branch_id = $item[0]->branch->id;
            $totalPotentialRevenuePerShowroom = $item->avg('product_price') * count($item);
            $percentageOfTotalRevenue = $totalPotentialRevenuePerShowroom / $totalRevenue * 100;
            $countPay = $this->getNoOfAltaraPayProductPerBranch(clone $newOrdersToBeGroupedClone, $branch_id);
            $countCash = $this->getNoOfAltaraCashProductPerBranch(clone $newOrdersToBeGroupedClone, $branch_id);
            $noOfAltaraPayRenewal =   $this->getNoOfAltaraPayReNewal(clone $newOrdersToBeGroupedClone, $branch_id);
            $noOfAltaraCashRenewal =   $this->getNoOfAltaraCashReNewal(clone $newOrdersToBeGroupedClone, $branch_id);
            $percentageOfAltaraPaySales =   $countPay / (count($item) ?: 1) * 100;
            $percentageOfAltaraCashSales =   $countCash / (count($item) ?: 1) * 100;
            return [
                'branch_id' => $branch_id,
                'branch_name' => $item[0]->branch->name,
                'avg_price_of_prod_per_showroom' => number_format($item->avg('product_price'), 2),
                'total_potential_revenue_sold_per_showroom' => number_format($totalPotentialRevenuePerShowroom, 2),
                'number_of_sales' => count($item),
                'no_of_altara_pay_renewal' => $noOfAltaraPayRenewal,
                'no_of_altara_cash_renewal' => $noOfAltaraCashRenewal,
                'no_of_altara_pay' => $countPay,
                'no_of_altara_cash' => $countCash,
                'percentage_of_total_revenues' => number_format($percentageOfTotalRevenue, 3),
                'percentage_of_altara_pay_sales' => number_format($percentageOfAltaraPaySales, 3),
                'percentage_of_altara_cash_sales' => number_format($percentageOfAltaraCashSales, 3),
            ];
        });
    }

    private  function getNoOfAltaraPayProduct(Builder $newOrdersForComputation)
    {
        return $newOrdersForComputation->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Pay%');
        })->count();
    }

    private  function getNoOfAltaraPayProductPerBranch(Builder $newOrdersForComputation, $branch_id)
    {
        return $newOrdersForComputation->where('branch_id', $branch_id)->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Pay%');
        })->count();
    }
    private  function getNoOfAltaraCashProductPerBranch(Builder $newOrdersForComputation, $branch_id)
    {
        return $newOrdersForComputation->where('branch_id', $branch_id)->whereHas('businessType', function ($query) {
            $query->where('name', 'like', '%Altara Credit%');
        })->count();
    }

    private  function getNoOfAltaraCashProduct(Builder $newOrdersForComputation)
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
            'percentage_of_sales_altara_pay' => number_format(($totalAltaraPay / $totalSales) * 100, 3),
            'percentage_of_sales_altara_cash' => number_format(($totalAltaraCash / $totalSales) * 100, 3)
        ];
    }

    private  function getNoOfAltaraPayNewSale(Builder $newOrdersForComputation, int $branch_id)
    {
        return $newOrdersForComputation
            ->where('branch_id', $branch_id)
            ->whereHas('salesCategory', function ($query) {
                $query->whereIn('id', self::NewSalesCategoryIDs);
            })
            ->whereHas('businessType', function ($query) {
                $query->where('name', 'like', '%Altara Pay%');
            })->count();
    }

    private  function getNoOfAltaraCashReNewal(Builder $newOrdersForComputation, int $branch_id)
    {
        return $newOrdersForComputation
            ->where('branch_id', $branch_id)
            ->whereHas('salesCategory', function ($query) {
                $query->whereIn('id', self::RenewalSalesCategoryIDs);
            })
            ->whereHas('businessType', function ($query) {
                $query->where('name', 'like', '%Altara Credit%');
            })->count();
    }
    private  function getNoOfAltaraPayReNewal(Builder $newOrdersForComputation, int $branch_id)
    {
        return $newOrdersForComputation
            ->where('branch_id', $branch_id)
            ->whereHas('salesCategory', function ($query) {
                $query->whereIn('id', self::RenewalSalesCategoryIDs);
            })
            ->whereHas('businessType', function ($query) {
                $query->where('name', 'like', '%Altara Pay%');
            })->count();
    }
}
