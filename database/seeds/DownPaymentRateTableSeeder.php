<?php

use App\DownPaymentRate;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DownPaymentRateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('down_payment_rates')->delete();
        $name = ['zero', 'twenty', 'forty', 'sixty', 'eighty'];
        $percent = [0, 20, 40, 60, 80];

        for ($i=0; $i<count($name); $i++){
            DownPaymentRate::create([
                'name' => $name[$i],
                'percent' => $percent[$i]
            ]);
        }
    }
}
