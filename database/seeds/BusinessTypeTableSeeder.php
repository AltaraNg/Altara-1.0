<?php

use App\BusinessType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BusinessTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('business_types')->delete();
        $types = ['Altara Credit Products', 'Altara Pay Products', 'Altara Pay Cash Loan', 'Altara Credit Cash Loan'];
        DB::table('business_types')->delete();
        foreach ($types as $type) {
            BusinessType::create(['name' => $type]);
        }
    }
}
