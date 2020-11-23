<?php
namespace Database\Seeders;

use App\InventoryStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InventoryStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = ["status" => InventoryStatus::AVAILABLE];
        DB::table("inventory_statuses")->updateOrInsert($status);
        $status = ["status" => InventoryStatus::SOLD];
        DB::table("inventory_statuses")->updateOrInsert($status);
        $status = ["status" => InventoryStatus::DAMAGED];
        DB::table("inventory_statuses")->updateOrInsert($status);
        $status = ["status" => InventoryStatus::REPOSSESSED];
        DB::table("inventory_statuses")->updateOrInsert($status);
    }
}
