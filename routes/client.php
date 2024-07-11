<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'clientLogin']);
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('orders', [\App\Http\Controllers\ClientOrderController::class, 'index']);
    Route::get('register/client', [\App\Http\Controllers\ClientOrderController::class, 'index']);
});
