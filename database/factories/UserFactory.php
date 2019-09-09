<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'role_id' => 1,
        'staff_id' =>  $faker->username,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
        'full_name' =>  $faker->firstName . ' ' . $faker->lastName,
        'date_of_appointment' => $faker->date('Y-m-d'),
        'address' => $faker->streetAddress,
        'gender' => 'male',
        'phone_number' => $faker->phoneNumber,
        'category' => 'permanent',
        'status' => 'married',
        'email' => $faker->safeEmail,
        'referee_1' => $faker->firstName . ' ' . $faker->lastName,
        'referee_2' => $faker->firstName . ' ' . $faker->lastName,
        'highest_qualification' => 'masters',
        'branch_id' => 1,
        'referee_1_phone_no' => $faker->phoneNumber,
        'referee_2_phone_no' => $faker->phoneNumber,
        'date_of_birth' => $faker->date('Y-m-d'),
        'hr_id' => 1,
        'nationality' => $faker->country,
        'next_of_kin_name'=> $faker->firstName . ' ' . $faker->lastName,
        'next_of_kin_phone_no' => $faker->phoneNumber,



    ];
});
