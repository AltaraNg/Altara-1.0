<?php

use Illuminate\Database\Seeder;

class PaymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $type = ['Downpayment', 'Repayments', 'Affidavits', 'Wallets'];

        for ($i=0; $i<count($type); $i++){
            \App\Models\PaymentType::create([
                'type' => $type[$i]
            ]);
        }
    }
}
