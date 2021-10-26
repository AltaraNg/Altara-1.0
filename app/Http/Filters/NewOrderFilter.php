<?php

namespace App\Http\Filters;

use App\Traits\IFilterByBranch;
use Carbon\Carbon;
use App\OrderStatus;
use App\RenewalPrompterStatus;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class NewOrderFilter extends BaseFilter
{
//    use IFilterByBranch;
    /**
     * @param int $day
     */
    public function missedPayment(int $day)
    {
        $date = Carbon::today()->subDays($day);

        $this->builder->whereHas('amortization', function (Builder $query) use ($date) {
            $query->where('expected_payment_date', $date)
                ->where('actual_amount', '<', 1);
        })->get();
    }

    /**
     * @param int $count
     */
    public function rePayment(int $count)
    {
        $this->builder->whereHas('amortization', function (Builder $query) {
            $query->where('actual_amount', '<', 1);
        }, '>=', $count)->get();
    }

    /**
     * @param string $date
     */
    public function startDate($date)
    {
        $this->builder->whereHas('amortization', function ($query) use ($date) {
            $selectedDay = Carbon::parse($date) ?? Carbon::now();
            $query->select('new_order_id')
                ->from('amortizations')
                ->whereDate('expected_payment_date', $selectedDay->subDays($this->fields()['days'] ?? 2)->toDateString())
                ->where('actual_payment_date', NULL);
        });
    }

    /**
     * @param int $days
     */
    public function days(int $days)
    {
        $this->builder->whereHas('amortization', function ($query) use ($days) {
            $selectedDay = Carbon::parse($this->fields()['startDate'] ?? null) ?? Carbon::now();
            $query->select('new_order_id')
                ->from('amortizations')
                ->whereDate('expected_payment_date', '<=', $selectedDay->subDays($days)->toDateString())
                ->where('actual_payment_date', NULL);
        })
            ->where('status_id', OrderStatus::where('name', OrderStatus::ACTIVE)->first()->id);
    }

    /**
     * @param string $type
     */
    public function type(string $type)
    {
        $this->builder->whereHas('notifications', function ($query) use ($type) {
            $query->select('notifiable_id')
                ->from('notifications')
                ->where('data->type', $type)
                ->where('notifiable_type', 'App\NewOrder');
        });
    }

    /**
     * @param string $status
     */
    public function status(string $status)
    {
        $this->builder->whereHas('notifications', function ($query) use ($status) {
            $query->select('notifiable_id')
                ->from('notifications')
                ->where('data->status', $status)
                ->where('notifiable_type', 'App\NewOrder');
        });
    }

    public function businessType(int $type)
    {
        $this->builder->whereHas('businessType', function ($query) use ($type) {
            $query->select('business_type_id')
                ->from('business_types')
                ->where('id', $type);
        });
    }

    public function renewalList(string $renew)
    {
        $this->builder->whereHas('amortization', function (Builder $query) {
            $query->where('actual_amount', '<', 1);
        }, '<=', request('count', 2));
    }

    /**
     * @param string $date
     * @param string $column
     * filter order by the supplied date using the order date column
     */
    public function date(string $date, $column = 'order_date')
    {
        $this->builder->whereDate($column, $date);
    }

    /**
     * @param string $employee_status
     * Filter orders employee status
     */
    public function sector(string $employee_status)
    {
        if ($employee_status == "informal") {
            $employee_status = "informal(business)";
        }
        $this->builder->whereHas('customer', function ($query) use ($employee_status) {
            $query->where('employment_status', $employee_status);
        });
    }

    /**
     * @param string $salesCategory
     * Filter orders sales
     */
    public function salesCategory(int $salesCategory)
    {
        $this->builder->whereHas('salesCategory', function ($query) use ($salesCategory) {
            $query->where('id', $salesCategory);
        });
    }

    /**
     * @param string $from
     * @param string $column
     */
    public function fromDate(string $date, $column = 'order_date')
    {
        $this->builder->whereDate($column, '>=', $date)
            ->whereDate($column, '<=', $this->request->toDate ?? Carbon::now());
    }

    /**
     * @param string $orderType
     * Filter orders by order type
     */
    public function orderType(int $orderType)
    {
        $this->builder->whereHas('orderType', function ($query) use ($orderType) {
            $query->where('id', $orderType);
        });
    }

    /**
     * @param string $orderType
     * Filter orders by order type
     */
    public function isCompletedOrder(bool $isCompletedOrder = true)
    {
        if ($isCompletedOrder) {
            $this->builder->where('status_id', OrderStatus::where('name', OrderStatus::COMPLETED)->first()->id);
        }
    }

    public function orderHasAtMostTwoPaymentsLeft(bool $orderHasTwoPaymentsLeft = true)
    {
        if ($orderHasTwoPaymentsLeft) {
            $rawQuery = DB::raw("EXISTS(SELECT COUNT(*) AS totalRepayment, SUM(IF(amortizations.actual_payment_date IS NOT NULL, 1 , 0)) as noOfRePaymentMade from amortizations WHERE new_orders.id = amortizations.new_order_id GROUP BY amortizations.new_order_id HAVING(totalRepayment-noOfRePaymentMade) <= 2)");
            $this->builder->whereRaw($rawQuery);
        }
    }

    public function renewalPrompterStatus(string $renewalPrompterStatus)
    {
        $renewalPrompterStatusId =  RenewalPrompterStatus::where('name', 'like', '%' . $renewalPrompterStatus . '%')->first()->id ?? '';
        $this->builder->whereHas('renewalPrompters', function ($query) use ($renewalPrompterStatusId) {
            $query->where('renewal_prompter_status_id', $renewalPrompterStatusId);
        });
    }
    public function unContactedRenewalPrompters($getNotContacted = true)
    {
        if ($getNotContacted) {
            $this->builder->doesntHave('renewalPrompters');
        }
    }
    public function filterOrderByBranch($filterOrderByBranch=true)
    {
        if ($filterOrderByBranch){
            if (auth()->user()->isDSACaptain()) {
                $this->builder->where('branch_id', auth()->user()->branch_id);
            } else if (auth()->user()->isCoordinator()) {

                // ** Might need refactoring
                $branches = auth()->user()->branches;
                $ids = $branches->map(function ($branch) {
                    return $branch->id;
                });
                $this->builder->whereIn('branch_id', $ids);
            } else if (auth()->user()->isDSAAgent()) {
                $this->builder->where('user_id', auth()->user()->id);
            }
        }
    }
}
