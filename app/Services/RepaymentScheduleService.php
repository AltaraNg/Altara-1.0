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
        //** Without Cash and Carry businessTypes */
        $withoutCNC = $dailySalesNewOrdersQuery->whereHas('businessType', function ($query) {
            $query->select('business_type_id')
                ->from('business_types')
                ->where('slug', '!=', BusinessType::ALTARA_PAY_CASH_N_CARRY);
        });

        $expectedRepayment = $withoutCNC->withSum('amortization', 'expected_amount')->get()->sum('amortization_sum_expected_amount');
        $totalOrders = $withoutCNC->count();
        $orderGroup = $this->groupAmortizationByRepaymentCount(clone $withoutCNC);
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

    private function groupAmortizationByRepaymentCount($newOrdersToBeGrouped)
    {
        // Create an empty array to hold the grouped amortization
        // Get the highest number of amortization
        // loop through the available orders and pluck the amortization to an array
        // Using the length of the highest number of amortization, for loop length
        // Generate a unique key for each index
        // Check if the current order amortization count is less than or eqaul to current index
        // Use the current index in the loop to pick the amortization and push it to the grouped amortization array
        // $groupedAmortization = collect([]);
        $groupedAmortization = array();
        $orders = clone $newOrdersToBeGrouped->withCount('amortization')->with('amortization')->get();

        $maxAmortizationCount = $orders->pluck('amortization_count')->max();

        foreach ($orders as $order) {
            $amortization = $order->amortization->toArray();
            $amortizationCount = count($amortization);
            for ($i = 0; $i < $maxAmortizationCount; $i++) {
                $key = 'group_' . $i;
                if (!array_key_exists($key, $groupedAmortization)) {
                    $groupedAmortization[$key] = [];
                }
                if ($amortizationCount <= $i) {
                    continue;
                }
                array_push($groupedAmortization[$key], $amortization[$i]);
            }
        }

        $groupedAmortizationCollection = collect($groupedAmortization);
        $data = $groupedAmortizationCollection->map(function ($item) {
            $itemCollection = collect($item);
            return [
                "expected_repayment" => $itemCollection->sum('expected_amount'),
                "actual_repayment" => $itemCollection->sum('actual_amount'),

            ];
        });
        return $data;




    }




}