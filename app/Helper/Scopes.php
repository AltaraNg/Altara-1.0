<?php

namespace App\Helper;


use App\Http\Controllers\ReminderController;

trait Scopes
{
    //this method checks if the $request['list'] is set and if it is set, it will append a query as written below
    //(the method is in the $reminderController). the return value of the getDateForReminder method
    //is a date array which the whereIn query will feed on. $column is either DATE for list
    //generated from the promise_call table or ORDER_DATE
    // for list generated from the order table

    public function scopeDateFilter($query, $column, $requestObject)
    {
        return isset($requestObject['list']) ?
            $query->whereIn($column, ReminderController::getDateForReminder($requestObject)) : $query;
    }

    public function scopeGetOrPaginate($query, $requestObject)
    {
        return isset($requestObject['list']) ? $query->get() : $query->paginate($requestObject['pageSize']);
        // return $query->paginate();
    }

    public function scopeOrderWithOtherTables($query, $requestObject)
    {
        $date_to = $requestObject['dateTo'];
        $date_from = $requestObject['dateFrom'];
        $branch_id = $requestObject['branchId'];

        return $query
            ->when(isset($branch_id), function ($query2) use ($branch_id) {
                return $query2->whereHas("storeProduct", function ($query3) use ($branch_id) {
                    $query3->where("store_name", "=", $branch_id);
                });
            })
            ->when(isset($date_from), function ($query2) use ($date_from, $date_to) {
                return $query2->whereBetween('order_date', [$date_from, $date_to]);
            })
            ->with([
                'status',
                'discount',
                'salesCategory',
                'repaymentFormal',
                'repaymentInformal',
                'salesType' => function ($query2) {
                    return $query2->select('id', 'name', 'percentage');
                },
                'storeProduct' => function ($query2) {
                    return $query2->select('product_id', 'product_name', 'store_name');
                },
                'reminders' => function ($q1) {
                    return $q1->select('id', 'order_id', 'sms_id', 'feedback', 'type', 'dva_id','date')
                        ->with([
                            'user' => function ($query2) {
                                return $query2->select('id', 'full_name');
                            },
                            'sms' => function ($query3) {
                                return $query3->select('id', 'message');
                            }
                        ]);
                },
                'floorAgent' => function ($q) {
                    return $q->select('staff_id', 'full_name');
                },
                'customer' => function ($customerQ) {
                    return $customerQ->select('id', 'branch_id', 'first_name', 'last_name', 'add_nbstop',
                        'add_street', 'add_houseno', 'add_addinfo_description', 'city', 'state', 'telephone',
                        'employment_status', 'work_guarantor_first_name', 'work_guarantor_last_name',
                        'work_guarantor_relationship', 'work_guarantor_telno',
                        'personal_guarantor_first_name', 'personal_guarantor_last_name',
                        'personal_guarantor_relationship', 'personal_guarantor_telno')
                        ->with(['branch' => function ($query2) {
                            return $query2->select('name', 'id');
                        }]);
                }
            ])
            ->select('id', 'order_date', 'sales_category_id', 'customer_id', 'product_sku',
                'product_price', 'down_payment', 'sales_agent_id', 'sales_type_id',
                'discount_id', 'repayment_amount', 'payment_method_id', 'status_id');
    }
}
