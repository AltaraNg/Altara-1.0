<?php

use App\Supplier;
use Faker\Generator as Faker;

$factory->define(Supplier::class, function (Faker $faker) {
    return [
        'user_id' => rand(1, 100),
        'sku' => rand(1, 100),
        'name' => $faker->firstName . ' ' . $faker->lastName,
        'address' => $faker->streetAddress,
        'phone_number' => $faker->phoneNumber,
        'email' => $faker->safeEmail,
        'date_of_reg' => $faker->date('Y-m-d'),
        'status' => $faker->boolean,
        'contact_person_name' => $faker->firstName . ' ' . $faker->lastName,
        'bank_account_name' => $faker->company,
        'bank_account_no' => $faker->bankAccountNumber,
        'bank_name' => $faker->userName,
    ];
});
