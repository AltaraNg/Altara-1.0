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
        $type = ['Downpayment', 'Repayments', 'Affidavits', 'Wallets'];

        for ($i=0; $i<count($type); $i++){
            \App\PaymentType::create([
                'type' => $type[$i]
            ]);
        }
    }
}
