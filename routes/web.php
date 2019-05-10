<?php

Route::get("data", function () {});

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');