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
Route::post('/password/reset', 'AuthController@sendResetLinkEmail');
Route::put('/password/reset', 'AuthController@reset');
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/branches', 'BranchController@allBranches');
    Route::post('/customer/autocomplete', 'CustomerController@autocompleteSearch');
    Route::get('/customer/lookup/{customer}', 'CustomerController@customerLookup');
    Route::post('/customer/{customer}', 'CustomerController@update');
    Route::get('/user/getBranchUsers', 'UserController@getBranchUsers');
    Route::get('/inventories', 'InventoryController@getInventories');
    Route::get('/users', 'UserController@getUsers');
    Route::get('/products/search', 'productController@searchProducts');
    Route::get('/categories', 'CategoryController@getCategories');
    Route::get('/brands', 'BrandController@getBrands');

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
        'update_customer_manager' => 'CustomerManagementHistoryController',
        'repayment' => 'RepaymentController',
        'payment_method' => 'PaymentMethodController',
        'renewal-list' => 'RenewalListController',
        'inventory' => 'InventoryController'
    ]);
    /*------*/
    Route::get('/users/list_type/{type}', 'UserController@getListForTypeahead');
    Route::post('/user/{id}/cv', 'UserController@uploadCV');
    Route::post('/logout', 'AuthController@logout');
    Route::get('/create', 'AuthController@create');
    Route::post('/register', 'AuthController@register');
    Route::get('/employee/{id}/edit', 'AuthController@edit');
    Route::post('/employee/{id}/update', 'AuthController@update');
    Route::get('/reset-password/{id}', 'AuthController@resetPassword');
    Route::get('/orders/user/{id}', 'OrderController@ordersByUser');
    Route::get('/orders/direct-debit-sales', 'OrderController@directDebitSales');
    Route::post('/report', 'ReportController@generateReport');
    Route::post('/report/daily', 'ReportController@getRegistrationReport');
    Route::get('/renewal-list/status/{status}', 'RenewalListController@list');
    Route::get('/renewal-list-status', 'RenewalListStatusController@index');
});
