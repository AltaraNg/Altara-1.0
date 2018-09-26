<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use App\Customer;
use App\Document;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/check', function (){
   $data = Customer::with(['branch','user','verification','address'])->where('id', '=','1')->first();
   return $data;
});