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

/*Route::get('/', function () {
    return view('welcome');
});*/

//use App\User;


/*Route::get('/check', function ($category = 'permanent') {
    $count = User::count();
    $prefix = '';
    $num = '';
    if ($category === 'permanent') $prefix = 'ACL/';
    if ($category === 'freelance') $prefix = 'AC/F/';
    if ($category === 'contract') $prefix = 'AC/C/';
    if (strlen((string)$count) === 1) $num = '00' . $count;
    else if (strlen((string)$count) === 2) $num = '0' . $count;
    else if (strlen((string)$count) >= 3) $num = $count;

    $id = $prefix . $num . '/' . date("y");
    return $id;
});*/

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');
