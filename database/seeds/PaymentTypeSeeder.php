<?php

use Illuminate\Database\Seeder;

class PaymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $type = ['Downpayment', 'Repayment'];

        for ($i=0; $i<count($type); $i++){
            factory(\App\PaymentType::class)->create(['type' => $type[$i]]);
        }
    }
}
