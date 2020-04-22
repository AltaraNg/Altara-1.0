<?php

use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $type = ['Downpayment', 'Repayment'];
        $method = ['Card', 'Cash'];

        for ($i=0; $i<count($type); $i++){
            factory(\App\TransactionType::class)->create(['type' => $type[$i]]);
        }

        for ($i=0; $i<count($method); $i++){
            factory(\App\TransactionMethod::class)->create(['method' => $method[$i]]);
        }
    }
}
