<?php
/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TransactionMethod;
use Faker\Generator as Faker;

$factory->define(TransactionMethod::class, function (Faker $faker, $method) {
    return [
        'method' => $method,
    ];
});
