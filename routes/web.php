<?php
Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');