<?php

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->domainName,
        'feature' => $faker->paragraph(1),
        'user_id' => rand(10, 110),
        'brand_id' => rand(1, 11),
        'category_id' => rand(1, 12),
        'retail_price' => rand(1, 20) * 1000,
        'is_active' => rand(0, 1),
        'img_url' => $faker->paragraph(1),
    ];
});
