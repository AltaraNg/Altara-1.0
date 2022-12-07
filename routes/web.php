<?php

Route::get('/', function () {
    return view('welcome');
});

//Route::any('/', function (){
//    return response()->json(["message" => "working"], 200);
//});
