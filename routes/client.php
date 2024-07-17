<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BankAccountController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'clientLogin']);
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('orders', [\App\Http\Controllers\ClientOrderController::class, 'index']);
    Route::get('customers', [\App\Http\Controllers\ClientCustomerController::class, 'index']);
    Route::post('bank/resolve/account/name', [BankAccountController::class, 'resolveAccountNumber']);
    Route::post('initiate/kyc/process', [BankAccountController::class, 'initiateKyc']);
    Route::get('bank/account', [BankAccountController::class, 'show']);
});

