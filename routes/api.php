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

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AmortizationController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BankController;
use App\Http\Controllers\BnlpController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\BusinessTypeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CautionController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\ContactCustomerController;
use App\Http\Controllers\CreditCheckController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerManagementHistoryController;
use App\Http\Controllers\CustomerStageController;
use App\Http\Controllers\CustomRepaymentDateController;
use App\Http\Controllers\DirectDebitDataController;
use App\Http\Controllers\DirectDebitKeyController;
use App\Http\Controllers\DirectDebitResultController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\DownPaymentRateController;
use App\Http\Controllers\DsaDailyRegistrationController;
use App\Http\Controllers\EmploymentStatusController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\GeneralReasonController;
use App\Http\Controllers\GenerateFirstCentralCustomerController;
use App\Http\Controllers\GuarantorPaystackAuthCodeController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\InventoryStatusController;
use App\Http\Controllers\LateFeeController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\MobileMessageNotificationController;
use App\Http\Controllers\NewDocumentController;
use App\Http\Controllers\NewOrderController;
use App\Http\Controllers\OrderRequestController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PaymentMethodController;
use App\Http\Controllers\PaymentReconcileController;
use App\Http\Controllers\PaymentTypeController;
use App\Http\Controllers\PaystackAuthCodeController;
use App\Http\Controllers\PaystackCustomersCodeController;
use App\Http\Controllers\PersonalGuarantorController;
use App\Http\Controllers\PriceCalculatorController;
use App\Http\Controllers\ProcessingFeeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductTransferController;
use App\Http\Controllers\ProductTypeController;
use App\Http\Controllers\PromiseCallController;
use App\Http\Controllers\ReasonController;
use App\Http\Controllers\RecollectionController;
use App\Http\Controllers\ReminderController;
use App\Http\Controllers\ReminderValueController;
use App\Http\Controllers\RenewalListController;
use App\Http\Controllers\RepaymentController;
use App\Http\Controllers\RepaymentCycleController;
use App\Http\Controllers\RepaymentDurationController;
use App\Http\Controllers\RepaymentReminderController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SalesCategoryController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\WebsiteProductController;
use App\Http\Controllers\WorkGuarantorController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class ,'login']);
Route::post('/password/reset', [AuthController::class, 'sendResetLinkEmail']);
Route::put('/password/reset', [AuthController::class, 'reset']);
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/branches', [BranchController::class, 'allBranches']);
    Route::post('/customer/autocomplete', [CustomerController::class, 'autocompleteSearch']);
    Route::get('/customer/lookup/{customer}', [CustomerController::class, 'customerLookup']);
    Route::post('/customer/{customer}', [CustomerController::class, 'update']);
    Route::get('/user/getBranchUsers', [UserController::class, 'getBranchUsers']);

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
    Route::get('/customer-recommendation/{customer}', 'RecommendationController@getRecommendationByCustomer');
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
    Route::resource('website-product', 'WebsiteProductController', ['except' => ['index', 'show']]);
    Route::resource('inventory', 'InventoryController', ['except' => ['index', 'show']]);
    Route::resource('price_calculator', 'PriceCalculatorController', ['except' => ['index', 'show']]);
    Route::resource('down_payment_rate', 'DownPaymentRateController', ['except' => ['index', 'show']]);
    Route::resource('business_type', 'BusinessTypeController', ['except' => ['index', 'show']]);
    Route::resource('repayment_duration', 'RepaymentDurationController', ['except' => ['index', 'show']]);


    Route::Resources([
        'log' => LogController::class,
        'user' => UserController::class,
        'bank' => BankController::class,
        'state' => StateController::class,
        'branch' => BranchController::class,
        'address' => AddressController::class,
        'message' => MessageController::class,
        'caution' => CautionController::class,
        'product' => ProductController::class,
        'customer' => CustomerController::class,
        'category' => CategoryController::class,
        'document' => DocumentController::class,
        'supplier' => SupplierController::class,
        'reminder' => ReminderController::class,
        'attendance' => AttendanceController::class,
        'promise_call' => PromiseCallController::class,
        'verification' => VerificationController::class,
        'work_guarantor' => WorkGuarantorController::class,
        'processing_fee' => ProcessingFeeController::class,
        'personal_guarantor' => PersonalGuarantorController::class,
        'dsa_daily_registration' => DsaDailyRegistrationController::class,
        'update_customer_manager' => CustomerManagementHistoryController::class,
        'repayment' => RepaymentController::class,
        'new_document' => NewDocumentController::class,
        'payment_method' => PaymentMethodController::class,
        'renewal-list' => RenewalListController::class,
        'payment' => PaymentController::class,
        'payment-type' => PaymentTypeController::class,
        'payment-reconcile' => PaymentReconcileController::class,
        'new_order' => NewOrderController::class,
        'repayment_cycle' => RepaymentCycleController::class,
        'custom_repayment_date' => CustomRepaymentDateController::class,
        'product_type' => ProductTypeController::class,
        'product_transfer' => ProductTransferController::class,
        'amortization' => AmortizationController::class,
        'repayment_reminder' => RepaymentReminderController::class,
        'collection' => CollectionController::class,
        'pay_stack_auth_code' => PaystackAuthCodeController::class,
        'pay_stack_customers_code' => PaystackCustomersCodeController::class,
        'dd_result' => DirectDebitResultController::class,
        'dd_data' => DirectDebitDataController::class,
        'dd_k' => DirectDebitKeyController::class,
        'reminder_value' => ReminderValueController::class,
        'discount' => DiscountController::class,
        'customer_contact' => ContactCustomerController::class,
        'customer_stage' => CustomerStageController::class,
        'employment_status' => EmploymentStatusController::class,
        'sales_category' => SalesCategoryController::class,
        'inventory_status' => InventoryStatusController::class,
        'todo' => TodoController::class,
        'reason' => ReasonController::class,
        'feedback' => FeedbackController::class,
        'role' => RoleController::class,
        'late_fee' => LateFeeController::class,
        'guarantor_paystack' => GuarantorPaystackAuthCodeController::class

    ]);

    Route::prefix('recollection')->group(function () {
        Route::get('/', [RecollectionController::class, 'index']);
        Route::get('/statistics', [RecollectionController::class, 'statistics']);
        Route::get('/feedback/{new_order}', [RecollectionController::class, 'show']);
        Route::post('/feedback', [RecollectionController::class, 'store']);
        Route::get('/regenerate/list', [RecollectionController::class, 'reGenerateCollectionList']);
        Route::get('/export/list', 'RecollectionController@exportCollectionList');
        Route::get('/export/list', [RecollectionController::class, 'exportCollectionList']);
    });

    Route::prefix('order-requests')->group(function () {
        Route::get('/', [OrderRequestController::class, 'index']);
        Route::patch('/{orderRequest}/process', [OrderRequestController::class, 'process']);
        Route::patch('/{orderRequest}/accept', [OrderRequestController::class, 'accept']);
        Route::patch('/{orderRequest}/decline', [OrderRequestController::class, 'decline']);
        Route::delete('/{orderRequest}/delete', [OrderRequestController::class, 'delete']);
    });

    Route::get('general/reasons/{type}', [GeneralReasonController::class, 'index']);
    Route::post('/send/customer/mobile/notification', [MobileMessageNotificationController::class, 'store']);


    Route::get('generate/first/central/excel', [GenerateFirstCentralCustomerController::class, 'index']);

    Route::post('/charge/customer', [NewOrderController::class, 'chargeCustomerOrder']);


    Route::patch('/update/credit/checker/status/{creditCheckerVerification}', [BnlpController::class, 'updateCreditCheckerVerificationStatus']);
    Route::get('all/credit/checker', [BnlpController::class, 'allCreditCheckerVerification']);

});


Route::resource('brand', BrandController::class)->only(['index', 'show']);
Route::resource('website-product', WebsiteProductController::class)->only(['index', 'show']);


Route::resource('inventory', InventoryController::class)->only(['index', 'show']);
Route::resource('price_calculator', PriceCalculatorController::class)->only(['index', 'show']);
Route::resource('down_payment_rate', DownPaymentRateController::class)->only(['index', 'show']);
Route::resource('business_type', BusinessTypeController::class)->only('index', 'show');
Route::resource('repayment_duration', RepaymentDurationController::class)->only(['index', 'show']);
Route::get('/get-product-by-rank', [ProductController::class, 'fetchLeastAndMostOrderedProduct']);

Route::get('generate/first/central/excel', [GenerateFirstCentralCustomerController::class, 'index']);
Route::post('/amortization/preview', [AmortizationController::class, 'preview']);


//Route::post('/ammo', [UserController::class, 'test']);
Route::post('/credit-check', [CreditCheckController::class, 'check']);
// Route::apiResource('amortization', 'AmortizationController');
// Route::post('/amortization/preview', 'AmortizationController@preview');

Route::middleware('bnpl.admin.access')->prefix('/bnlp')->group(function () {
    Route::post('/amortization/preview', [BnlpController::class, 'previewAmortization']);
    Route::post('/create/order', [BnlpController::class, 'createOrder']);
    Route::post('/send/message', [BnlpController::class, 'sendMessage']);
});
