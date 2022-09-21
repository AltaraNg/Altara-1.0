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

use App\BusinessType;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\UserController;
use App\NewOrder;
use Carbon\Carbon;

Route::post('/login', 'AuthController@login');
Route::post('/password/reset', 'AuthController@sendResetLinkEmail');
Route::put('/password/reset', 'AuthController@reset');
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/branches', 'BranchController@allBranches');
    Route::post('/customer/autocomplete', 'CustomerController@autocompleteSearch');
    Route::get('/customer/lookup/{customer}', 'CustomerController@customerLookup');
    Route::post('/customer/{customer}', 'CustomerController@update');
    Route::get('/user/getBranchUsers', 'UserController@getBranchUsers');

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
    Route::post('/customer/notification/{customer}', 'CustomerNotificationController@store');
    Route::post('/send-internal-message', 'MessageController@sendStaffMessage');
    Route::patch('/sales-category/{salesCat}/roles', 'SalesCategoryController@manageRoles');
    Route::patch('/new-order/{new_order}/repossess', 'NewOrderController@repossess');
    Route::get('/get-users', 'UserController@getUsers');
    Route::get('/contact-customer/export', 'ContactCustomerController@export');
    Route::get('/feedbacks/export', 'FeedbackController@export');
    Route::post('/recommendation', 'AmortizationController@recommend');
    Route::get('/get-product-by-rank', 'ProductController@fetchLeastAndMostOrderedProduct');

    Route::get('/order/reports', 'NewOrderController@report');
    Route::get('/order/reports/export', 'ReportController@getNewOrdersReport');
    Route::get('/order-types', 'OrderTypeController@index');
    Route::get('/paymentgateways', 'PaymentGatewayController@index');
    Route::get('/customer-contact/get-by-id/{reg_id}', 'ContactCustomerController@findByRegId');

    Route::get('/inactive/prospects', 'ProspectActivityController@inActiveProspects');
    Route::Resource('prospect_activities', 'ProspectActivityController')->only(['index', 'show']);

    Route::prefix('renewal/prompters')->group(function () {
        Route::get('/', 'RenewalPrompterController@index');
        Route::post('/', 'RenewalPrompterController@store');
        Route::get('/statuses', 'RenewalPrompterController@prompterStatuses');
        Route::get('/stats', 'RenewalPrompterController@statistics');
        Route::get('/history', 'RenewalPrompterController@show');
        Route::get('/customer-list', 'RenewalPrompterController@customerList');
    });
});
Route::middleware('auth:api')->group(function () {
    Route::resource('brand', 'BrandController', ['except' => ['index', 'show']]);
    Route::resource('inventory', 'InventoryController', ['except' => ['index', 'show']]);
    Route::resource('price_calculator', 'PriceCalculatorController', ['except' => ['index', 'show']]);
    Route::resource('down_payment_rate', 'DownPaymentRateController', ['except' => ['index', 'show']]);
    Route::resource('business_type', 'BusinessTypeController', ['except' => ['index', 'show']]);
    Route::resource('repayment_duration', 'RepaymentDurationController', ['except' => ['index', 'show']]);


    Route::Resources([
        'log' => 'LogController',
        'user' => 'UserController',
        'bank' => 'BankController',
        'state' => 'StateController',
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
        'payment' => 'PaymentController',
        'payment-type' => 'PaymentTypeController',
        'payment-reconcile' => 'PaymentReconcileController',
        'new_order' => 'NewOrderController',
        'repayment_cycle' => 'RepaymentCycleController',
        'custom_repayment_date' => 'CustomRepaymentDateController',
        'product_type' => 'ProductTypeController',
        'product_transfer' => 'ProductTransferController',
        'amortization' => 'AmortizationController',
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
        'inventory_status' => 'InventoryStatusController',
        'todo' => 'TodoController',
        'reason' => 'ReasonController',
        'feedback' => 'FeedbackController',
        'role' => 'RoleController',
        'late_fee' => 'LateFeeController'

    ]);

    Route::prefix('recollection')->group(function () {
        Route::get('/', 'RecollectionController@index');
        Route::get('/statistics', 'RecollectionController@statistics');
        Route::get('/feedback/{new_order}', 'RecollectionController@show');
        Route::post('/feedback', 'RecollectionController@store');
        Route::get('/regenerate/list', 'RecollectionController@reGenerateCollectionList');
        Route::get('/export/list', 'RecollectionController@exportCollectionList');
    });

    Route::prefix('order-requests')->group(function () {
        Route::get('/', 'OrderRequestController@index');
        Route::patch('/{orderRequest}/process', 'OrderRequestController@process');
        Route::patch('/{orderRequest}/accept', 'OrderRequestController@accept');
        Route::patch('/{orderRequest}/decline', 'OrderRequestController@decline');
        Route::delete('/{orderRequest}/delete', 'OrderRequestController@destroy');
        // Route::patch('/', 'OrderRequestController@index');
    });
    Route::get('general/reasons/{type}', 'GeneralReasonController@index');
    Route::post('/send/customer/mobile/notification', 'MobileMessageNotificationController@store');

    Route::get('generate/first/central/excel', 'GenerateFirstCentralCustomerController@index');
});

Route::resource('brand', 'BrandController', ['only' => ['index', 'show']]);
Route::resource('inventory', 'InventoryController', ['only' => ['index', 'show']]);
Route::resource('price_calculator', 'PriceCalculatorController', ['only' => ['index', 'show']]);
Route::resource('down_payment_rate', 'DownPaymentRateController', ['only' => ['index', 'show']]);
Route::resource('business_type', 'BusinessTypeController', ['only' => ['index', 'show']]);
Route::resource('repayment_duration', 'RepaymentDurationController', ['only' => ['index', 'show']]);
Route::get('generate/first/central/excel', 'GenerateFirstCentralCustomerController@index');

Route::post('/ammo', 'UserController@test');
Route::post('/credit-check', 'CreditCheckController@check');
//Route::apiResource('amortization', 'AmortizationController');
//Route::post('/amortization/preview', 'AmortizationController@preview');




