<?php

use App\Customer;
use App\Purchase;

Route::get("reminder", function () {

    /*$result = Customer::whereId(8916)->select(
        'id',
        'branch_id',
        'first_name',
        'middle_name',
        'last_name',
        'add_nbstop',
        'add_street',
        'add_houseno',
        'add_addinfo_description',
        'city',
        'state',
        'telephone',
        'civil_status',
        'employment_status'
    )->with(['branch' => function ($q) {
        return $q->select('id', 'name');
    }, 'purchases' => function ($q) {
        return $q->with(['repayment', 'floorAgent' => function ($qu) {
            return $qu->select('id', 'staff_id', 'full_name');
        }]);
    },'reminders'])->where('purchase.order_date','=','2019-04-30')->get();*/


    $result = Purchase::where('order_date', '=', '2019-04-29')->with
    (['repayment', 'reminders',
        'floorAgent' => function ($q) {
            return $q->select('id', 'staff_id', 'full_name');
        },
        'customer' => function ($customerQ) {
            return $customerQ->select(
                'id',
                'branch_id',
                'first_name',
                'middle_name',
                'last_name',
                'add_nbstop',
                'add_street',
                'add_houseno',
                'add_addinfo_description',
                'city',
                'state',
                'telephone',
                'civil_status',
                'employment_status');
        }])->get();
    return $result;

});

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');