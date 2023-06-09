<?php

use App\Discount;
use App\SalesType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiscountsTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $percentageArray = [0, 0, 5, 10, 0, 5];
        $nameArray = ['new/normal purchase', 'sala promo', 'group of 5', 'group of 10', 'Christmas promo', 'renewal'];
        DB::table('discounts')->delete();
        for ($i = 0; $i < count($nameArray); $i++) {
            Discount::create([
                'name' => $nameArray[$i],
                'percentage_discount' => $percentageArray[$i]
            ]);
        }
    }
}
