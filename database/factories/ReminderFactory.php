<?php

use Faker\Generator as Faker;


$factory->define(App\Reminder::class, function (Faker $faker) {

    $type = array("sms", "call");

    return [
        "customer_id" => rand(5000, 5100),
        "order_id" => rand(1,100),
        "sms_id" => rand(1,100),
        "repayment_level" => rand(1,12),
        "feedback" => $faker->paragraph,
        "dva_id" => rand(1,50),
        "type" => $type[rand(0,1)]
    ];
});
