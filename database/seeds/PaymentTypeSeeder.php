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
        $type = ['Downpayment', 'Repayments', 'Affidavits'];

        for ($i=0; $i<count($type); $i++){
            \App\PaymentType::create([
                'type' => $type[$i]
            ]);
        }
    }
}
