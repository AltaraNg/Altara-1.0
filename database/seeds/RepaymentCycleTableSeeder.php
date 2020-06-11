<?php

use App\RepaymentCycle;
use Illuminate\Database\Seeder;

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
        $name = ['bimonthly', 'monthly', 'custom'];
        $value = [14, 28, 'custom'];

        for ($i=0; $i<count($name); $i++){
            RepaymentCycle::create([
                'name' => $name[$i],
                'value' => $value[$i]
            ]);
        }
    }
}
