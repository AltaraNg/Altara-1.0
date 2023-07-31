<?php

namespace App\Services;

use App\Helper\GenerateDateRange;
use App\Models\BusinessType;
use App\Repositories\BranchRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class RepaymentScheduleService
{
    use GenerateDateRange;
    private $branchRepo;
    private $defaultingDays = 45;
    public function __construct(BranchRepository $branchRepository)
    {
        $this->branchRepo = $branchRepository;
    }

    public function getRepaymentPerMonth($dailySalesNewOrdersQuery)
    {
        $withoutCNC = $dailySalesNewOrdersQuery->whereHas('businessType', function ($query) {
            $query->select('business_type_id')
                ->from('business_types')
                ->where('slug', '!=', BusinessType::ALTARA_PAY_CASH_N_CARRY);
        });

        $expectedRepayment = $withoutCNC->withSum('amortization', 'expected_amount')->get()->sum('amortization_sum_expected_amount');
        $totalOrders = $withoutCNC->count();
        $orderGroup = $this->groupAmortizationByMonth(clone $withoutCNC);
        $actualRepayment = $withoutCNC->withSum('amortization', 'actual_amount')->get()->sum('amortization_sum_actual_amount');
        $defaultingOrders = $this->getDefaultingOrders(clone $withoutCNC);
        $orders = $withoutCNC->paginate(10);
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

    public function getDefaultingOrders($orderQuery)
    //get orders whose amortization is 45days due
    {
        $defaultingOrders = $orderQuery->whereHas('amortization', function ($q) {
            return $q->whereColumn('actual_amount', '<', 'expected_amount')->whereDate('expected_payment_date', '<=', Carbon::now()->subDays($this->defaultingDays));
        })->count();
        return $defaultingOrders;
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