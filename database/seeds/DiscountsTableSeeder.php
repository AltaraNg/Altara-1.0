<?php

use App\Discount;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiscountsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $percentageArray = array(0, 20, 40, 60, 80);
        $nameArray = array('zero-percent', 'twenty-percent', 'forty-percent', 'sixty-percent', 'eighty-percent');
        DB::table('discounts')->delete();
        for ($i = 0; $i < count($nameArray); $i++) {
            Discount::create([
                'name' => $nameArray[$i],
                'percentage' => $percentageArray[$i]
            ]);
        }
    }
}
