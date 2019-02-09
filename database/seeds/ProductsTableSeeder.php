<?php

use App\Product;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
   /**
    * Run the database seeds.
    *
    * @return void
    */
   public function run()
   {
      $faker = Factory::create();
      DB::table('products')->delete();
      foreach (range(1, 100) as $i) {
         Product::create([
            'sku' => str_random(14),
            'name' => $faker->firstName . ' ' . $faker->lastName,
            'description' => $faker->paragraph(1),
            'user_id' => rand(1, 10),
            'sold_by' => rand(1, 10),
            'received_by' => rand(1, 10),
            'branch_id' => rand(2, 6),
            'brand_id' => rand(1, 11),
            'category_id' => rand(1, 12),
            'supplier_id' => rand(1, 20),
            'invoice_id' => rand(1, 15),
            'purchase_order_id' => rand(1, 5),
            'price' => rand(1, 20) * 1000,
            'supplier_price' => rand(1, 20) * 1000,
            'availability_status' => rand(0, 1),
            'date_sold' => $faker->date('Y-m-d'),
            'date_received' => $faker->date('Y-m-d'),
            'date_supplied' => $faker->date('Y-m-d'),
         ]);
      }
   }
}
