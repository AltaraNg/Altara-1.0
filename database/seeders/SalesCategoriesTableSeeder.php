<?php

namespace Database\Seeders;
use App\Models\SalesCategory;
use Illuminate\Database\Seeder;

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
