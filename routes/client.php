<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BankAccountController;
use App\Http\Controllers\ClientDashboardController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'clientLogin']);
Route::post('set/password/via/email/token', [AuthController::class, 'setPasswordViaEmailToken']);
Route::post('resend/email/token', [AuthController::class, 'resendEmailVerificationTokenClient']);
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/auth/user', [AuthController::class, 'clientUser']);
    Route::get('orders', [\App\Http\Controllers\ClientOrderController::class, 'index']);
    Route::get('customers', [\App\Http\Controllers\ClientCustomerController::class, 'index']);
    Route::post('bank/resolve/account/name', [BankAccountController::class, 'resolveAccountNumber']);
    Route::post('initiate/kyc/process', [BankAccountController::class, 'initiateKyc']);
    Route::get('bank/account', [BankAccountController::class, 'show']);
    Route::get('supported/banks', [BankAccountController::class, 'listOfBanks']);
    Route::get('dashboard', [ClientDashboardController::class, 'dashboard']);
});

