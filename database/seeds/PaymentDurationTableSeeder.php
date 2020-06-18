<?php

use App\RepaymentDuration;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
        DB::table('payment_durations')->delete();

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
