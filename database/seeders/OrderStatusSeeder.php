<?php

namespace Database\Seeders;

use App\Models\OrderStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $status = ["name" => OrderStatus::ACTIVE];
        DB::table("order_statuses")->updateOrInsert($status);
        $status = ["name" => OrderStatus::PENDING];
        DB::table("order_statuses")->updateOrInsert($status);
        $status = ["name" => OrderStatus::REPOSSESSED];
        DB::table("order_statuses")->updateOrInsert($status);
        $status = ["name" => OrderStatus::CLOSED];
        DB::table("order_statuses")->updateOrInsert($status);
    }
}
