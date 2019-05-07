<?php

use App\SalesCategory;
use App\SalesType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalesTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $percentageArray = array(0, 0, 5, 10, 0, 5);
        $nameArray = array('new/normal purchase', 'sala promo', 'group of 5', 'group of 10', 'Christmas promo', 'renewal');
        DB::table('sales_types')->delete();
        for ($i = 0; $i < count($nameArray); $i++) {
            SalesType::create([
                'name' => $nameArray[$i],
                'percentage_discount' => $percentageArray[$i]
            ]);
        }
    }
}
