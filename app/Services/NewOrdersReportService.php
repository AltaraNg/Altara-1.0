<?php

namespace App\Services;

use App\Helper\GenerateDateRange;
use App\NewOrder;
use Illuminate\Support\Facades\DB;
use App\Repositories\BranchRepository;
use App\Repositories\BusinessTypeRepository;

use Carbon\Carbon;

class NewOrdersReportService
{
    use GenerateDateRange;
    private $branchRepo;
    public function __construct(BranchRepository $branchRepository)
    {
        $this->branchRepo = $branchRepository;
    }
    public  function generateMetaData($newOrdersQuery)
    {
        $newOrdersForComputation = clone $newOrdersQuery->whereHas('branch', function ($query) {
            $query->where('name', '!=', 'Ikoyi')->where('name', '!=', 'Challenge Warehouse')->where('name', '!=', 'Micro Alakia');
        });

        $additional = collect([]);
        $totalSales = $newOrdersQuery->count();
        $totalRevenue = $newOrdersQuery->avg('product_price') * $totalSales;
        $totalDownPayment = $newOrdersQuery->sum('down_payment');
        $additional = $additional->put('groupedDataByBranch', $this->getBranchesData(clone $newOrdersQuery, $totalRevenue, $totalDownPayment));
        $totalAltaraPay = $this->getNoOfAltaraPayProduct(clone $newOrdersForComputation);
        $totalAltaraCash = $this->getNoOfAltaraCashProduct(clone $newOrdersForComputation);
        //to prevent division by zero error
        $revenuePerSale = $totalRevenue / ($totalSales ?: 1);
        $additional = $additional->put('altaraPayVersusAltaraCash', $this->getComparismOfAltaraPayVsAltaraCash($totalAltaraCash, $totalAltaraPay, $totalSales));
        $additional = $additional->put('noOfSalesEachDownPaymentRate', $this->getNoOfSalesEachDownPaymentRate(clone $newOrdersForComputation, $totalSales));
        $additional = $additional->put('noOfSalesMadeOnEachProduct', $this->getNoOfSalesMadeOnEachProduct(clone $newOrdersForComputation, $totalSales));
        $additional = $additional->put('total_no_sales', $totalSales);
        $additional = $additional->put('total_revenue', number_format($totalRevenue, 2));
        $additional = $additional->put('revenue_per_sale', number_format($revenuePerSale, 2));
        return $additional;
    }

    private  function getBranchesData($newOrdersQuery, $totalRevenue, $totalDownPayment)
    {
        $branches = $this->branchRepo->getBranches(['id', 'name']);
        $newOrdersToBeGroupedClone = clone $newOrdersQuery;
        $ordersGroupedByBranch =  $this->groupOrderByBranchId($newOrdersQuery);
        $ordersGroupedByBranchData = $this->generateGroupedBranchesDataThatHasOrders($ordersGroupedByBranch, $totalRevenue, $newOrdersToBeGroupedClone, $totalDownPayment)->filter();
        $ordersUnGroupedByBranch = $this->generateUngroupedBranchesDataWithNoOrders($branches, $ordersGroupedByBranchData)->filter();
        //if there are no orders group
        if (!$ordersGroupedByBranchData->count()) {
            return  $ordersUnGroupedByBranch;
        }
        //filter is to remove nulls in collection object
        return $ordersGroupedByBranchData->merge($ordersUnGroupedByBranch);
    }

    private  function groupOrderByBranchId($newOrdersToBeGrouped)
    {
        return  $newOrdersToBeGrouped->join('branches', 'new_orders.branch_id', '=', 'branches.id')
            ->select(
                'branches.name as branch_name',
                'branches.id',
                DB::raw("count(*) as count, 
            AVG(product_price) as avg_price_of_prod_per_showroom, 
            AVG(product_price) * count(*)  as total_potential_revenue_sold_per_showroom,
            SUM(product_price) as sum_product_price,
            SUM(down_payment) as sum_down_payment
            ")
            )
            ->groupBy('branch_id')->get();
    }


    private function generateUngroupedBranchesDataWithNoOrders($allBranches, $groupedBranches)
    {
        return $allBranches->map(function ($branch) use ($groupedBranches) {
            if ((!collect($groupedBranches->pluck('branch_id'))->contains($branch->id)) && ($branch->name != 'Ikoyi')  && ($branch->name != 'Challenge Warehouse')  && ($branch->name != 'Micro Alakia')) {
                return [
                    'branch_id' => $branch->id,
                    'branch_name' => $branch->name,
                    'avg_price_of_prod_per_showroom' => 0,
                    'total_potential_revenue_sold_per_showroom' => 0,
                    'number_of_sales' => 0,
                    'percentage_of_total_revenues' => 0,
                    'no_of_altara_pay' => 0,
                    'no_of_altara_cash' => 0,
                    'percentage_downpayment' => 0,
                    'forecast' =>  0,
                ];
            }
            //this return generates a null
            return;
        });
    }
    private function generateGroupedBranchesDataThatHasOrders($groupedBranchesData, $totalRevenue, $newOrdersToBeGroupedClone, $totalDownPayment)
    {
        return $groupedBranchesData->map(function ($item, $key) use ($totalRevenue, $newOrdersToBeGroupedClone, $totalDownPayment) {
            $percentageOfTotalRevenue = $item->total_potential_revenue_sold_per_showroom / $totalRevenue * 100;
            $countPay = $this->getNoOfAltaraPayProductPerBranch(clone $newOrdersToBeGroupedClone, $item->id);
            $countCash = $this->getNoOfAltaraCashProductPerBranch(clone $newOrdersToBeGroupedClone, $item->id);
            $toDate = request('toDate') ?? Carbon::now();
            $fromDate = request('fromDate') ?? Carbon::now()->endOfMonth();
            $totalNoDays = Carbon::now()->endOfMonth()->modify('0 month')->day;
            $noOfDaysInBetweenFromDateToDate =  abs((Carbon::parse($toDate)->diff(Carbon::parse($fromDate)))->days);
            if (request('toDate')) {
                $toDate = Carbon::parse($toDate);
                $totalNoDays = $noOfDaysInBetweenFromDateToDate + 1;
            }
            return [
                'branch_id' => $item->id,
                'branch_name' => $item->branch_name,
                'avg_price_of_prod_per_showroom' => number_format($item->avg_price_of_prod_per_showroom, 2),
                'total_potential_revenue_sold_per_showroom' => number_format($item->total_potential_revenue_sold_per_showroom, 2),
                'number_of_sales' => $item->count,
                'percentage_of_total_revenues' => number_format($percentageOfTotalRevenue, 3),
                'no_of_altara_pay' => $countPay,
                'no_of_altara_cash' => $countCash,
                'percentage_downpayment' => ceil(($item->sum_down_payment / $item->sum_product_price)  * 100),
                'forecast' => ceil(($item->count  / $toDate->day) * $totalNoDays),
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

    private  function getNoOfSalesEachDownPaymentRate($newOrdersForComputation, $totalSales)
    {
        //prevent zero division
        $totalSales = $totalSales ?: 1;
        return $newOrdersForComputation->join('down_payment_rates', 'new_orders.down_payment_rate_id', '=', 'down_payment_rates.id')
            ->select(
                'down_payment_rate_id',
                'down_payment_rates.name as rate_name',
                'down_payment_rates.id',
                'down_payment_rates.percent as rate_percent',
                DB::raw("count(*) as count")
            )
            ->groupBy('down_payment_rate_id')->get()->map(function ($downpaymentRate) use ($totalSales) {
                return [
                    'rate_name' => ucwords($downpaymentRate->rate_name),
                    'rate_percent' => $downpaymentRate->rate_percent,
                    'rate_count' => $downpaymentRate->count,
                    'rate_percentage' => number_format(($downpaymentRate->count / $totalSales) * 100, 2)
                ];
            });
    }

    private  function getNoOfSalesMadeOnEachProduct($newOrdersForComputation, $totalSales)
    {
        //prevent zero division
        $totalSales = $totalSales ?: 1;
        return $newOrdersForComputation->join('products', 'new_orders.product_id', '=', 'products.id')
            ->select(
                'product_id',
                'products.name as product_name',
                'products.retail_price as retail_price',
                DB::raw("count(*) as count")
            )
            ->groupBy('product_id')->get()->map(function ($product) use ($totalSales) {
                return [
                    'product_name' => ucwords($product->product_name) ?? 0,
                    'product_retail_price' => $product->retail_price ?? 0,
                    'product_count' => $product->count ?? 0,
                    'percentage' => number_format(($product->count / $totalSales) * 100, 2) ?? 0,
                ];
            })->sortByDesc('product_count')->take(10)->values();
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
    public function getTotalSalesPerDay($dailySalesNewOrdersQuery)
    {
        $toDate = request('toDate') ?? Carbon::now();
        $fromDate = request('fromDate') ?? Carbon::now()->subDays(30);
        $toDate = Carbon::parse($toDate);
        $fromDate = Carbon::parse($fromDate);
        $differenceInDates = $toDate->diff($fromDate);
        $differenceInDays = abs($differenceInDates->days);
        $from = clone $fromDate;
        if ($differenceInDays > 30  || $differenceInDays < 30) {
            $toDate = $from->addDays(30);
        }

        $period = collect($this->date_range($fromDate, $toDate, 'Y-m-d'));
        $groupedOrdersByOrderDate =  $dailySalesNewOrdersQuery->whereHas('branch', function ($query) {
            $query->where('name', '!=', 'Ikoyi')->where('name', '!=', 'Challenge Warehouse')->where('name', '!=', 'Micro Alakia');
        })->select(DB::raw("count(*) as no_of_sales"), "order_date")
            ->groupBy('order_date')->get();
        $totalSalesPerDay =  $period->map(function ($date) use ($groupedOrdersByOrderDate) {
            return [
                'order_date' => $date,
                'total' =>  $groupedOrdersByOrderDate->where('order_date', $date)->first()->no_of_sales ?? 0,
                'fullDayName' => Carbon::parse($date)->format('l'),
                'shortDayName' => Carbon::parse($date)->format('D')
            ];
        })->sortBy('order_date');
        return $totalSalesPerDay;
    }
}
