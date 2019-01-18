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
   Route::get('/branch/create', 'BranchController@create');
   Route::get('/branches', 'BranchController@allBranches');
   Route::post('/branch/{branch}', 'BranchController@update');
   /*------*/
   Route::get('/customer/create', 'CustomerController@create');
   Route::post('/customer/{customer}', 'CustomerController@update');
   /*------*/
   Route::get('/user/getBranchUsers', 'UserController@getBranchUsers');
   Route::apiResources([
      'log' => 'LogController',
      'user' => 'UserController',
      'bank' => 'BankController',
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
      'dsa_daily_registration' => 'DsaDailyRegistrationController'
   ]);
   /*------*/
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
//Route::get('/runQuery','CustomerController@runQuery');
//Route::get('/runQuery','AuthController@runQuery');