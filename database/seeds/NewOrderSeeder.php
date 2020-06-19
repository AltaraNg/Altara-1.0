<?php

use Illuminate\Database\Seeder;

class NewOrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\NewOrder::class, 10)->create()->each(function ($order) {
            if($order->repaymentCycle->id === 3){
                $order->customDate()->create(['custom_date' => rand(1,31)]);
            }
        });
    }
}
