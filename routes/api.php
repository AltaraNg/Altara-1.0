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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');
Route::get('/create', 'AuthController@create');
Route::post('/register', 'AuthController@register');
Route::get('/reset-password/{id}', 'AuthController@resetPassword');
Route::get('/employee/{id}/edit', 'AuthController@edit');
Route::post('/employee/{id}/update', 'AuthController@update');
Route::resource('log', 'LogController');
Route::resource('customer', 'CustomerController');
Route::resource('document', 'DocumentController');
Route::resource('verification', 'VerificationController');
Route::resource('address', 'AddressController');
///fix the controller below and make resourceful use
Route::post('/report', 'ReportController@generateReport');
Route::get('/customer','CustomerController@getData');
Route::get('/user','UserController@getData');