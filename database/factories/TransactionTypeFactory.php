<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TransactionType;
use Faker\Generator as Faker;

$factory->define(TransactionType::class, function (Faker $faker, $type) {
    return [
        'type' => $type,
    ];
});
