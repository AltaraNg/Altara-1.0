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

/*use App\User;

Route::get('/check', function ($category = 'contract', $role = 1) {
    $driver_role = [24, 25];
    if (in_array(intval($role), $driver_role)) {
        $lastID = User::whereIn('role_id', $driver_role)->orderBy('staff_id', 'desc')->first()->staff_id;
    } else {
        $lastID = User::where('category', $category)->whereNotIn('role_id',$driver_role)->orderBy('staff_id', 'desc')->first()->staff_id;
    }
    $num = '';
    $prefix = '';
    $nextNum = '';

    if (in_array(intval($role), [24, 25])) {
        $prefix = 'DD/';
        $nextNum = explode('/', $lastID)[1];
    }else{
        if ($category === 'contract') {
            $prefix = 'AC/C/';
            $nextNum = explode('/', $lastID)[2];
        }
        if ($category === 'permanent') {
            $prefix = 'ACL/';
            $nextNum = explode('/', $lastID)[1];
        }
        if ($category === 'freelance') {
            $prefix = 'AC/F/';
            $nextNum = explode('/', $lastID)[2];
        }
    }
    $nextNum = intval($nextNum) + 1;
    if (strlen((string)$nextNum) === 1) $num = '00' . $nextNum;
    else if (strlen((string)$nextNum) === 2) $num = '0' . $nextNum;
    else if (strlen((string)$nextNum) >= 3) $num = $nextNum;
    $id = (in_array(intval($role), $driver_role)) ? $prefix . $num : $prefix . $num . '/' . date("y");
    return [$lastID, $id];
});*/


Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');
