<?php

use App\Bank;
use App\Order;
use App\PaymentMethod;
use App\Http\Controllers\ReminderController;

Route::get("data", function () {
    $result = Order::where('order_date', '=', ReminderController::getDateForReminder(request('list')))->with
    (['repayment', 'repaymentFormal', 'repaymentInformal', 'storeProduct', 'discount','salesCategory','salesType', 'reminders' => function ($query) {
        return $query->with('user', 'sms');//remember to select only name and id here later
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
        'payment_methods' => PaymentMethod::all(),
        'banks' => Bank::all(),
        //'dva_id' => auth('api')->user()->id,
        'orders' => $result
    ]);
});

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');