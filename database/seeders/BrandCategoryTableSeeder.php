<?php
namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brand_category')->delete();
        for ($i = 0; $i < 20; $i++) {
            $brand = Brand::find(rand(1, 10))->first();
            $category = Category::find(rand(1, 10))->first();
            $brand->categories()->attach($category);
//            $category->brands()->attach(rand(1, 10));
        }
    }
}