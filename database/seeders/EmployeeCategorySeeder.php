<?php

use App\Models\EmployeeCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeeCategorySeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employee_categories')->delete();
        $categories = ['permanent','contract','freelance'];
        for ($i = 0; $i < count($categories); $i++) {
            EmployeeCategory::create(['name' => $categories[$i]]);
        }
    }
}
