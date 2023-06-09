<?php

namespace Database\Seeders;

use App\EmploymentStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmploymentStatusSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $status = ["name" => EmploymentStatus::EMPLOYED];
        DB::table("employment_statuses")->updateOrInsert($status);
        $status = ["name" => EmploymentStatus::SELF_EMPLOYED];
        DB::table("employment_statuses")->updateOrInsert($status);
        $status = ["name" => EmploymentStatus::UNEMPLOYED];
        DB::table("employment_statuses")->updateOrInsert($status);
    }
}
