<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'AuthController@login');
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/branches', 'BranchController@allBranches');
    Route::get('/customer/lookup/{customer}', 'CustomerController@customerLookup');
    Route::post('/customer/{customer}', 'CustomerController@update');
    Route::get('/user/getBranchUsers', 'UserController@getBranchUsers');
    Route::get('/products', 'ProductController@getProducts');
    Route::get('/suppliers', 'SupplierController@getSuppliers');
    Route::Resources([
        'log' => 'LogController',
        'user' => 'UserController',
        'bank' => 'BankController',
        'state' => 'StateController',
        'brand' => 'BrandController',
        'branch' => 'BranchController',
        'address' => 'AddressController',
        'message' => 'MessageController',
        'caution' => 'CautionController',
        'product' => 'ProductController',
        'customer' => 'CustomerController',
        'category' => 'CategoryController',
        'document' => 'DocumentController',
        'supplier' => 'SupplierController',
        'reminder' => 'ReminderController',
        'attendance' => 'AttendanceController',
        'promise_call' => 'PromiseCallController',
        'verification' => 'VerificationController',
        'work_guarantor' => 'WorkGuarantorController',
        'processing_fee' => 'ProcessingFeeController',
        'personal_guarantor' => 'PersonalGuarantorController',
        'dsa_daily_registration' => 'DsaDailyRegistrationController',
        'repayment' => 'RepaymentController',
        'payment_method' => 'PaymentMethodController',
    ]);
    /*------*/
    Route::post('/user/{id}/cv', 'UserController@uploadCV');

    Route::post('/logout', 'AuthController@logout');
    Route::get('/create', 'AuthController@create');
    Route::post('/register', 'AuthController@register');
    Route::get('/employee/{id}/edit', 'AuthController@edit');
    Route::post('/employee/{id}/update', 'AuthController@update');
    Route::get('/reset-password/{id}', 'AuthController@resetPassword');
    /*------*/
    Route::post('/report', 'ReportController@generateReport');
    Route::post('/report/daily', 'ReportController@getRegistrationReport');
});