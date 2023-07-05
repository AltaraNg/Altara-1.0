<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\NewOrder;
use Faker\Generator as Faker;

$factory->define(NewOrder::class, function (Faker $faker) {
    $customer = \App\Models\Customer::pluck('id')->toArray();
    $product = \App\Models\StoreProduct::all()->toArray();
    $repaymentDuration = \App\Models\RepaymentDuration::pluck('id')->toArray();
    $repaymentCycle = \App\Models\RepaymentCycle::pluck('id')->toArray();
    $businessType = \App\Models\BusinessType::pluck('id')->toArray();
    $status = \App\Models\OrderStatus::pluck('id')->toArray();
    $user = \App\Models\User::all()->toArray();

    return [
        'order_date' => $faker->date(),
        'order_number' => $faker->unique()->text(8),
        'customer_id' => $faker->randomElement($customer),
        'product_id' => $faker->randomElement($product)['product_id'],
        'product_price' => $faker->numberBetween(5000, 20000),
        'down_payment' => $faker->numberBetween(1, 5000),
        'repayment' => $faker->numberBetween(5000, 15000),
        'repayment_duration_id' => $faker->randomElement($repaymentDuration),
        'repayment_cycle_id' => $faker->randomElement($repaymentCycle),
        'business_type_id' => $faker->randomElement($businessType),
        'status_id' => $faker->randomElement($status),
        'user_id' => $faker->randomElement($user)['id'],
        'branch_id' => $faker->randomElement($user)['branch_id'],
    ];
});
