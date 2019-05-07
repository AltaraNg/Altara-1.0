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
        $nameArray = array('new sales', 'renewal');
        DB::table('sales_categories')->delete();
        for ($i = 0; $i < count($nameArray); $i++) {
            SalesCategory::create([
                'name' => $nameArray[$i],
            ]);
        }
    }
}
