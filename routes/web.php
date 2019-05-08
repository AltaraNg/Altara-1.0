<?php

use App\Order;
use App\Purchase;


function getDateForReminder($list){
//        $date = date('Y-m-d');
    $date = '2019-04-29';
    switch($list){
        case 2:
            return date('Y-m-d', strtotime($date . ' - 7 days'));
        case 3:
            return date('Y-m-d', strtotime($date . ' - 1 month'));
        default:
            return $date;
    }
}

Route::get("data", function () {

    $result = Order::where('order_date', '=', getDateForReminder(request('list')))->with
    (['repayment','repaymentFormal','repaymentInformal', 'reminders' => function($query){
        return $query->with('user');//remember to select only name and id here later
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
                'employment_status')->with('branch');//remember to select only name and id here later
        }])->get();

    return response()->json([
        'orders' => $result
    ]);
});

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');