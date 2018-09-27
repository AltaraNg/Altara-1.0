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


use App\Address;
use App\Branch;
use App\Customer;
use App\Document;
use App\Log;
use App\Role;
use App\State;
use App\User;
use App\Verification;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/check', function (){
    //$data = User::find(1)->role;
    //$data = Role::find(10)->users;
    //$data = User::find(1)->branch;
    //$data = Branch::find(2)->users;
    //$data = Customer::find(1)->user;
    //$data = User::find(1)->customers;
    //$data = Customer::find(1)->branch;
    //$data = Branch::find(2)->customers;
    //$data = Branch::find(2)->state;
    //$data = State::find(30)->branches;
    //$data = User::find(1)->logs;
    //$data = Log::find(1)->user;
    //$data = Verification::find(1)->user;
    //$data = User::find(1)->verifications;
    //$data = Verification::find(1)->customer;
    //$data = Customer::find(1)->verification;
    //$data = User::find(1)->documents;
    //$data = Document::find(1)->user;
    //$data = Document::find(1)->customer;
    //$data = Customer::find(1)->document;
    //$data = User::find(1)->addresses;
    //$data = Address::find(17)->user;
    //$data = Address::find(17)->customer;
    //$data = Customer::find(1)->address;

    $data = Customer::with(['branch','user','verification','address'])->where('id', '=','1')->first();
    return $data;
});