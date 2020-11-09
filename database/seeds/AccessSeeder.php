<?php

use App\Access;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccessSeeder extends Seeder
{
    /**
     * Run the database seeds.
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
