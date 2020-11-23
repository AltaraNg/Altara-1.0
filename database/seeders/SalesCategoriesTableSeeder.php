<?php

use App\Discount;
use App\SalesCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalesCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = ['new sales', 'renewal'];
        DB::table('sales_categories')->delete();
        foreach ($categories as $category) {
            SalesCategory::create(['name' => $category]);
        }
    }
}
