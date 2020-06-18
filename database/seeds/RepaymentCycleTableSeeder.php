<?php

use App\RepaymentCycle;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RepaymentCycleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('repayment_cycles')->delete();
        $name = ['bimonthly', 'monthly', 'custom'];
        $value = [14, 28, 30];

        for ($i=0; $i<count($name); $i++){
            RepaymentCycle::create([
                'name' => $name[$i],
                'value' => $value[$i]
            ]);
        }
    }
}
