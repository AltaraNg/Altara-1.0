<?php

namespace Database\Seeders;

use App\CustomerStage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerStageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = ["name" => CustomerStage::CONTACTED];
        DB::table("customer_stages")->updateOrInsert($status);
        $status = ["name" => CustomerStage::REGISTERED];
        DB::table("customer_stages")->updateOrInsert($status);
        $status = ["name" => CustomerStage::AFFIDAVIT];
        DB::table("customer_stages")->updateOrInsert($status);
        $status = ["name" => CustomerStage::PURCHASED];
        DB::table("customer_stages")->updateOrInsert($status);
    }
}
