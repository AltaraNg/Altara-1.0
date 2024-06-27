<?php

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
   /**
    * Run the database seeders.
    *
    * @return void
    */
   public function run()
   {
      factory(Product::class, 100)->create();
   }
}
