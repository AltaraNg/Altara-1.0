<?php

use App\Message;

Route::get("data", function () {
    dd( Message::insertGetId([
        'user_id' => 1,
        'message' => 'this is the message',
        'pages' => 1,
        'contacts' => '028239209',
        'contact_count' => 1
    ]));

    return $id;
});

Route::get('/{vue?}', function () {
    return view('welcome');
})->where('vue', '[\/\w\.-]*');
