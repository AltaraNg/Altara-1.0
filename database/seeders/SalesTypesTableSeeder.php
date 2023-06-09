<?php

use App\Discount;
use App\SalesCategory;
use App\SalesType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalesTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $percentageArray = [0, 20, 40, 60, 80];
        $nameArray = ['zero-percent', 'twenty-percent', 'forty-percent', 'sixty-percent', 'eighty-percent'];
        DB::table('sales_types')->delete();
        for ($i = 0; $i < count($nameArray); $i++) {
            SalesType::create([
                'name' => $nameArray[$i],
                'percentage' => $percentageArray[$i]
            ]);
        }
    }
}
