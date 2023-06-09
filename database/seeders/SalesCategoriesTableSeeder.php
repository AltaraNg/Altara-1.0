<?php

namespace Database\Seeders;
use App\SalesCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalesCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        SalesCategory::updateOrCreate(
            [
                'name' => SalesCategory::GROUP_REFERRAL
            ]
        );
        SalesCategory::updateOrCreate(
            [
                'name' => SalesCategory::STAFF_PROGRAM
            ]
        );
    }
}
