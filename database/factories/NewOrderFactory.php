<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\NewOrder;
use Faker\Generator as Faker;

$factory->define(NewOrder::class, function (Faker $faker) {
    $customer = App\Customer::pluck('id')->toArray();
    $product = App\StoreProduct::pluck('product_id')->toArray();
    $repaymentDuration = App\RepaymentDuration::pluck('id')->toArray();
    $repaymentCycle = App\RepaymentCycle::pluck('id')->toArray();
    $businessType = App\BusinessType::pluck('id')->toArray();
    $status = App\OrderStatus::pluck('id')->toArray();
    $user = App\User::pluck('id')->toArray();

    return [
        'order_date' => $faker->date(),
        'order_number' => $faker->unique()->text(8),
        'customer_id' => $faker->randomElement($customer),
        'product_id' => $faker->randomElement($product),
        'product_price' => $faker->numberBetween(5000, 20000),
        'down_payment' => $faker->numberBetween(1, 5000),
        'repayment' => $faker->numberBetween(5000, 15000),
        'repayment_duration_id' => $faker->randomElement($repaymentDuration),
        'repayment_cycle_id' => $faker->randomElement($repaymentCycle),
        'business_type_id' => $faker->randomElement($businessType),
        'status_id' => $faker->randomElement($status),
        'user_id' => $faker->randomElement($user),
    ];
});
