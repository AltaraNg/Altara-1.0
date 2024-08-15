<?php

namespace App\Http\Filters;

use App\Models\OrderStatus;
use App\Models\ProductType;
use App\Models\RenewalPrompterStatus;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Boolean;

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
                ->where('notifiable_type', 'App\Models\NewOrder');
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
                ->where('notifiable_type', 'App\Models\NewOrder');
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
    public function billboardOrders(string $true)
    {
        $this->builder->has('raffleDrawCode');
    }

    public function repaymentPlan(int $type)
    {
        $this->builder->whereHas('repaymentDuration', function ($query) use ($type) {
            $query->select('repayment_duration_id')
                ->from('repayment_durations')
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

    public function scheduleDate($date, $column = 'order_date')
    {
        $dateRange = json_decode($date);
        $this->builder->whereBetween(DB::raw('DATE(order_date)'), array($dateRange[0], $dateRange[1]));

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
        $renewalPrompterStatusId = RenewalPrompterStatus::where('name', 'like', '%' . $renewalPrompterStatus . '%')->first()->id ?? '';
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

    public function recollection(string $status = null)
    {
        if ($status == 'all') {
            $this->builder->has('recollection');
        } else {
            $this->builder->whereHas('recollection', function ($query) use ($status) {
                $query->where('status', $status);
            });
        }
    }
    public function filterOrderByBranch($filterOrderByBranch = true)
    {

        if ($filterOrderByBranch) {
            if (auth()->user()->isDSACaptain()) {
                $this->builder->where('new_orders.branch_id', auth()->user()->branch_id);
            } else if (auth()->user()->isCoordinator()) {
                // ** Might need refactoring
                $branches = auth()->user()->branches;
                $ids = $branches->map(function ($branch) {
                    return $branch->id;
                });
                $this->builder->whereIn('new_orders.branch_id', $ids);
            } else if (auth()->user()->isDSAAgent()) {

                $this->builder->where('owner_id', auth()->user()->id);
            } else if (auth()->user()->isCashLoanAgent()) {
                $this->builder->where('owner_id', auth()->user()->id)->whereHas('product.productType', function ($query) {
                    $query->where('name', ProductType::CASH_LOAN);
                });
            } else if (auth()->user()->isRentAgent()) {
                $this->builder->where('owner_id', auth()->user()->id);
            }
        }
    }
    /**
     * @param int $id
     */
    public function branch(int $id)
    {
        $this->builder->where('new_orders.branch_id', $id);
    }
    /**
     * @param int $id
     */
    public function orderNumber(string $order_number)
    {
        $this->builder->where('new_orders.order_number', $order_number);
    }
    /**
     * @param int $id
     */
    public function customerId(int $id)
    {
        $this->builder->where('new_orders.customer_id', $id);
    }
    public function businessTypeGroup(string $group)
    {
        if ($group == 'cash') {
            $searchTerms = ['cash_loan', '_rentals', 'super_loan'];
            $closure = function ($query) use ($searchTerms) {
                //this method is a laravel query builder macro, you can find in the app service provider.
                $query->appplyLikeOnMultipleSearchTerms('slug', $searchTerms);
            };
        } else if ($group == 'product') {
            $closure = function ($query) {
                $query->where('slug', 'like', "%_products%");
            };
        }
        $this->builder->whereHas('businessType', $closure);
    }

    /**
     * @param int $id
     */
    public function financed_by(string $financed_by)
    {
        $this->builder->where('financed_by', $financed_by);
    }

    public function tenant(int $tenant_id )
    {
        $this->builder->where('tenant_id', $tenant_id);
    }
    public function bnplOrders()
    {
        $this->builder->whereNotNull('bnpl_vendor_product_id')->orderBy('order_date', 'desc');
    }
    public function orderStatus($status)
    {
        $this->builder->where('status_id', OrderStatus::where('name', $status)->first()->id);
    }
    public function vendor($vendor)
    {
        $this->builder->whereHas('bnplVendorProduct.vendor', function ($q) use ($vendor) {
            $q->where('full_name', 'like', '%' . $vendor . '%');
        });
    }
    public function customerPhone($phone)
    {
        $this->builder->whereHas('customer', function ($q) use ($phone) {
            $q->where('telephone', 'like', '%' . $phone . '%');
        });
    }

    public function customOrderNumber(string $order_number)
    {
        $this->builder->where('new_orders.custom_order_number', $order_number);
    }

    public function customCustomerId(string $order_number)
    {
        $this->builder->where('customers.custom_customer_id', $order_number);
    }
}
