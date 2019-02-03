<?php

use App\Brand;
use App\Category;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandCategoryTableSeeder extends Seeder
{
   /**
    * Run the database seeds.
    *
    * @return void
    */
   public function run()
   {
      DB::table('brand_category')->delete();
      for ($i = 0; $i < 20; $i++) {
         $brand = Brand::find(rand(1,10))->first();
         $category = Category::find(rand(1,10))->first();
         $brand->categories()->attach(rand(1,10));
         $category->brands()->attach(rand(1,10));
      }
   }
}
