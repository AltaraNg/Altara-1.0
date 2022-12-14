<?php

namespace Database\Seeders;
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
