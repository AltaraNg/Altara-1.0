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
Route::get('/create', 'AuthController@create');
Route::post('/logout', 'AuthController@logout');
Route::post('/register', 'AuthController@register');
Route::get('/employee/{id}/edit', 'AuthController@edit');
Route::get('/branch/create', 'BranchController@create');
Route::get('/customer/create', 'CustomerController@create');
Route::get('/branches', 'BranchController@allBranches');
Route::post('/branch/{branch}', 'BranchController@update');
Route::post('/employee/{id}/update', 'AuthController@update');
Route::post('/customer/{customer}', 'CustomerController@update');
Route::get('/reset-password/{id}', 'AuthController@resetPassword');
Route::apiResources([
    'log' => 'LogController',
    'user' => 'UserController',
    'state' => 'StateController',
    'branch' => 'BranchController',
    'address' => 'AddressController',
    'message' => 'MessageController',
    'customer' => 'CustomerController',
    'document' => 'DocumentController',
    'verification' => 'VerificationController',
    'work_guarantor' => 'WorkGuarantorController',
    'processing_fee' => 'ProcessingFeeController',
    'personal_guarantor' => 'PersonalGuarantorController',
]);
Route::post('/report', 'ReportController@generateReport');
//Route::get('/runQuery','CustomerController@runQuery');