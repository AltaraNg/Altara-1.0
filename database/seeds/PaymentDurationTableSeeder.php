<?php

use App\RepaymentDuration;
use Illuminate\Database\Seeder;

class PaymentDurationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $name = ['three_months', 'six_months', 'twelve_months'];
        $value = [3, 6, 12];

        for ($i=0; $i<count($name); $i++){
            RepaymentDuration::create([
                'name' => $name[$i],
                'value' => $value[$i]
            ]);
        }
    }
}
