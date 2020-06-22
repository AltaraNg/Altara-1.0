<?php

use Illuminate\Database\Seeder;

class CustomRepaymentDateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for ($i = 0; $i < 5; $i++) {
            \App\CustomRepaymentDate::create([
                'new_order_id' => $this->getRandomOrderId(),
                'date' => rand(1, 31)


            ]);
        }
    }
    private function getRandomOrderId() {
        $order = \App\StoreProduct::where('repayment_cycle_id', '3')->inRandomOrder()->first();
        return $order->id;
    }
}
