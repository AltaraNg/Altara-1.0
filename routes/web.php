<?php
Route::get("data", function () {});
Route::get('/altara_pay_report', 'AltaraPayReportController@index');

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');