<?php
namespace Database\Seeders;

use App\Models\Access;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccessSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $access = ["name" => Access::SUPER_ADMIN];
        DB::table("accesses")->updateOrInsert($access);
        $access = ["name" => Access::ADMIN];
        DB::table("accesses")->updateOrInsert($access);
        $access = ["name" => Access::USER];
        DB::table("accesses")->updateOrInsert($access);
    }
}