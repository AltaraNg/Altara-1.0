<?php

Route::get('/data', function(){});
Route::any('/test', function (){
    $token = 'kjsss';
    return view('emails.password-reset', compact('token'));
});

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');
