<?php

use App\ProductType;
use App\RepaymentCycle;
use Illuminate\Database\Seeder;

class ProductTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        //
        ProductType::updateOrCreate(
            ['name' => ProductType::APPLIANCE]
        );
        ProductType::updateOrCreate(
            ['name' => ProductType::CASH_LOAN]);
        ProductType::updateOrCreate(
            ['name' => ProductType::RESCUE]);
        ProductType::updateOrCreate(
            ['name' => ProductType::LIFESTYLE]);
    }
}
