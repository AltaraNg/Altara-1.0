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
        'inventory' => 'InventoryController',
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
        'payment' => 'PaymentController',
        'payment-type' => 'PaymentTypeController',
        'payment-reconcile' => 'PaymentReconcileController',
        'new_order' => 'NewOrderController',
        'business_type' => 'BusinessTypeController',
        'down_payment_rate' => 'DownPaymentRateController',
        'repayment_duration' => 'RepaymentDurationController',
        'repayment_cycle' => 'RepaymentCycleController',
        'custom_repayment_date' => 'CustomRepaymentDateController',
        'product_type' => 'ProductTypeController',
        'product_transfer' => 'ProductTransferController',
        'amortization' => 'AmortizationController',
        'price_calculator' => 'PriceCalculatorController',
        'repayment_reminder' => 'RepaymentReminderController',
        'collection' => 'CollectionController',
        'pay_stack_auth_code' => 'PaystackAuthCodeController',
        'pay_stack_customers_code' => 'PaystackCustomersCodeController',
        'dd_result' => 'DirectDebitResultController',
        'dd_data' => 'DirectDebitDataController',
        'dd_k' => 'DirectDebitKeyController',
        'reminder_value' => 'ReminderValueController',
        'discount' => 'DiscountController',
        'customer_contact' => 'ContactCustomerController',
        'customer_stage' => 'CustomerStageController',
        'employment_status' => 'EmploymentStatusController',
        'sales_category' => 'SalesCategoryController',
        'inventory_status' => 'InventoryStatusController','todo' => 'TodoController',

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
    Route::post('/new-order-renewal', 'RenewalListController@newOrderRenewal');
    Route::get('/sales-category/{salesCat}/roles', 'SalesCategoryController@getRoles');
    Route::get('/renewal-list-status', 'RenewalListStatusController@index');
    Route::patch('/payment-reconcile/{payment_reconcile}/finance', 'PaymentReconcileController@finance');
    Route::patch('/brand/{brand}/categories', 'BrandController@manageCategories');
    Route::post('/amortization/preview', 'AmortizationController@preview');
    Route::get('/inventory-summary', 'InventoryController@summary');
    Route::post('/sheet/product', 'ProductController@uploadSheet');
    Route::post('/sheet/inventory', 'InventoryController@uploadSheet');
    Route::post('/sheet/calculator', 'PriceCalculatorController@uploadCalculator');
    Route::get('/jobs', 'ManualController@jobs');
    Route::post('/no-auth', 'ManualController@getNoAuth');
    Route::post('/contact_notification/{customer}', 'CustomerContactNotificationController@store');
    Route::patch('/sales-category/{salesCat}/roles', 'SalesCategoryController@manageRoles');
    Route::patch('/new-order/{new_order}/repossess', 'NewOrderController@repossess');

});

Route::post('/ammo', 'UserController@test');
Route::post('/credit-check', 'CreditCheckController@check');
//Route::apiResource('amortization', 'AmortizationController');
//Route::post('/amortization/preview', 'AmortizationController@preview');


