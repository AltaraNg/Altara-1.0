<?php

use App\Customer;
use App\Purchase;

Route::get("reminder", function () {
    $result = Purchase::where('order_date', '=', /*date('Y-m-d'),*/'2019-04-29'/*,'2018-12-21'*/)->with
    (['repayment', 'reminders'  => function($query){
        return $query->with('user');
    },
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
                'employment_status')->with('branch');
        }])->get();
    return $result;

});

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');