<?php

namespace Database\Seeders;

use App\DownPaymentRate;
use Illuminate\Database\Seeder;

class DownPaymentRateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
