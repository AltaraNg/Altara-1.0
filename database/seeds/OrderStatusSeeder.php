<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = ["name" => "Approved"];
        DB::table("order_statuses")->updateOrInsert($status);
        $status = ["name" => "Pending"];
        DB::table("order_statuses")->updateOrInsert($status);
    }
}
