<?php

use Faker\Generator as Faker;

$factory->define(App\EmployeeCategory::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});
