<?php

namespace App\Services;

use App\Helper\GenerateDateRange;
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
        $totalSalesPerDay = $this->getTotalSalesPerDay(clone $newOrdersForComputation);
        return $totalSalesPerDay;
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
        $additional = $additional->put('total_no_sales', $totalSales);
        $additional = $additional->put('total_revenue', number_format($totalRevenue, 2));
        $additional = $additional->put('revenue_per_sale', number_format($revenuePerSale, 2));
        $additional = $additional->put('totalSalesPerDay', $totalSalesPerDay);
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
            AVG(down_payment) as average_down_payment,
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
                    'avg_downpayment' =>  0,
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
            return [
                'branch_id' => $item->id,
                'branch_name' => $item->branch_name,
                'avg_price_of_prod_per_showroom' => number_format($item->avg_price_of_prod_per_showroom, 2),
                'total_potential_revenue_sold_per_showroom' => number_format($item->total_potential_revenue_sold_per_showroom, 2),
                'number_of_sales' => $item->count,
                'percentage_of_total_revenues' => number_format($percentageOfTotalRevenue, 3),
                'no_of_altara_pay' => $countPay,
                'no_of_altara_cash' => $countCash,
                'percentage_downpayment' => ceil(($item->sum_down_payment / $totalDownPayment)  * 100),
                'avg_downpayment' =>  number_format($item->average_down_payment, 2),
                // 'forcast' => $item
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
    private function getTotalSalesPerDay($newOrdersForComputation)
    {
        $toDate = request('toDate') ?? Carbon::now();
        $fromDate = request('fromDate') ?? Carbon::now()->subDays(30);
        $toDate = Carbon::parse($toDate);
        $fromDate = Carbon::parse($fromDate);
        $differenceInDates = $toDate->diff($fromDate);
        if (abs($differenceInDates->days) > 30) {
            $toDate =  Carbon::now();
            $fromDate = Carbon::now()->subDays(30);
            // dd($fromDate, $toDate);
        } else if (abs($differenceInDates->days) < 30) {
            $from = clone $fromDate;
            $toDate =  $from->addDays(30);
        }
        $period = collect($this->date_range($fromDate, $toDate, 'Y-m-d'));
        $groupedOrdersByOrderDate =  $newOrdersForComputation->select(DB::raw("count(*) as no_of_sales"), "order_date")
            ->whereBetween('order_date', [$fromDate->format('Y-m-d'), $toDate->format('Y-m-d')])
            ->groupBy('order_date')->get();
        // $orderDatesFromDB =   $groupedOrdersByOrderDate->pluck('order_date');
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
