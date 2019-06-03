<?php


use App\PromiseCall;

Route::get("data", function () {

    /*$result = PromiseCall::where('date','=','2019-05-31')->with(['order'])->get();

    return $result;*/

    $result = PromiseCall::whereIn('date',['2019-06-01'])->with(['order' => function($query){
        return $query->with([
            'repayment', 'repaymentFormal', 'repaymentInformal', 'storeProduct', 'discount', 'salesCategory', 'salesType', 'reminders' => function ($query) {
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
            }]);
    }])->get();


    return $result;

});

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');