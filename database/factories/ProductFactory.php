<?php

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->domainName,
        'feature' => $faker->paragraph(1),
        'user_id' => rand(2, 100),
        'brand_id' => rand(1, 11),
        'category_id' => rand(1, 12),
        'retail_price' => rand(1, 20) * 1000,
    ];
});
