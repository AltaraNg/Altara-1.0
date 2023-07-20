<?php

namespace App\Services;

use App\Helper\GenerateDateRange;
use App\Repositories\BranchRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class RepaymentScheduleService
{
    use GenerateDateRange;
    private $branchRepo;
    public function __construct(BranchRepository $branchRepository)
    {
        $this->branchRepo = $branchRepository;
    }

    public function getRepaymentPerMonth($dailySalesNewOrdersQuery)
    {

        $expectedRepayment = $dailySalesNewOrdersQuery->withSum('amortization', 'expected_amount')->get()->sum('amortization_sum_expected_amount');
        $totalOrders = $dailySalesNewOrdersQuery->count();
        $orderGroup = $this->groupAmortizationByMonth(clone $dailySalesNewOrdersQuery);
        $actualRepayment = $dailySalesNewOrdersQuery->withSum('amortization', 'actual_amount')->get()->sum('amortization_sum_actual_amount');
        $orders = $dailySalesNewOrdersQuery->paginate(10);
        $defaultingOrders = $dailySalesNewOrdersQuery->whereHas('amortization', function ($q) {
            return $q->whereColumn('actual_amount', '<', 'expected_amount');
        })->count();
        $data = ([
            "actual_repayment" => $actualRepayment,
            "expected_repayment" => $expectedRepayment,
            "orders" => $orders,
            "total_orders" => $totalOrders,
            "defaultingOrders" => $defaultingOrders,
            "groupByMonth" => $orderGroup,
        ]);


        return $data;
    }

    private function groupAmortizationByMonth($newOrdersToBeGrouped)
    {
        $amorts = $newOrdersToBeGrouped->get()->pluck('amortization')->flatten();
        $grouped = $amorts->groupBy(function ($item, $key) {
            return Carbon::parse($item['expected_payment_date'])->englishMonth;
        });
        return $grouped->map(function ($item) {
            return [
                "expected_repayment" => $item->sum('expected_amount'),
                "actual_repayment" => $item->sum('actual_amount'),

            ];
        });
    }




}