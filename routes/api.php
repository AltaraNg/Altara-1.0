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
Route::resource('customer','CustomerController');