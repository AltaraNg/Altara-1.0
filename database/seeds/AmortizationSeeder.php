<?php

use Illuminate\Database\Seeder;

class AmortizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $this->call([
            DownPaymentRateTableSeeder::class,
            PaymentDurationTableSeeder::class,
//            PaymentMethodsTableSeeder::class,
            RepaymentCycleTableSeeder::class,
            BusinessTypeTableSeeder::class,
            OrderStatusTableSeeder::class,
            NewOrderTableSeeder::class
        ]);
    }
}
