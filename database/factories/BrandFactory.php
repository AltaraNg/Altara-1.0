<?php

use Faker\Generator as Faker;

$factory->define(App\Brand::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->company,
        'is_available' => true
    ];
});
