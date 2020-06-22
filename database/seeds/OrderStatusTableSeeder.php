<?php

use Illuminate\Database\Seeder;

class OrderStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $type = ['Available', 'Pending', 'Cancelled'];

        for ($i=0; $i<count($type); $i++){
            \App\OrderStatus::create([
                'name' => $type[$i]
            ]);
        }
    }
}
