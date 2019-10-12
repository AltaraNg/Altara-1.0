<?php

namespace App\Helper;


trait Scopes
{

    //this method checks if the $request['list'] is set and if it is set, it will append a query as written below
    //(the method is in the $reminderController). the return value of the getDateForReminder method
    //is a date array which the whereIn query will feed on. $column is either DATE for list
    //generated from the promise_call table or ORDER_DATE
    // for list generated from the order table
    public function scopeDateFilter($query, $column, $list, $reminderController, $request)
    {
        return isset($list) ? $query->whereIn($column, $reminderController->getDateForReminder($list, $request)) : $query;
    }

    public function scopeGetOrPaginate($query, $request = null)
    {
        return isset($request['list']) ? $query->get() : $query->paginate($request['page_size']);
    }

    public function scopeCustomSelectCustomer($query)
    {
        return $query
            ->select('id', 'branch_id', 'first_name', 'last_name', 'add_nbstop', 'add_street', 'add_houseno',
                'add_addinfo_description', 'city', 'state', 'telephone', 'civil_status', 'employment_status',
                'work_guarantor_first_name', 'work_guarantor_last_name',
                'work_guarantor_relationship', 'work_guarantor_telno',
                'personal_guarantor_first_name', 'personal_guarantor_last_name',
                'personal_guarantor_relationship', 'personal_guarantor_telno')
            ->with(['branch' => function ($q) {
                return $q->select('name', 'id');
            }]);
    }

    public function scopeCustomSelectReminder($query)
    {
        return $query->with([
            'user' => function ($q2) {
                return $q2->select('id', 'full_name');
            },
            'sms' => function ($q2) {
                return $q2->select('id', 'message');
            }
        ]);
    }

    public function scopeOrderWithOtherTables($query, $request = null)
    {
        $branch_id = null;
        $date_from = null;
        $date_to = null;
        if(isset($request)) extract($request);

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
                'repayment', 'repaymentFormal', 'repaymentInformal', 'storeProduct', 'discount', 'salesCategory', 'salesType',
                'reminders' => function ($q1) {
                    return $q1->customSelectReminder();
                }, 'floorAgent' => function ($q) {
                    return $q->select('id', 'staff_id', 'full_name');
                }, 'customer' => function ($customerQ) {
                    return $customerQ->customSelectCustomer();
                }
            ])
            ->select('id', 'order_date', 'sales_category_id', 'customer_id', 'product_sku', 'product_price',
                'down_payment', 'sales_agent_id', 'sales_type_id', 'discount_id', 'repayment_amount','payment_method_id');
    }
}