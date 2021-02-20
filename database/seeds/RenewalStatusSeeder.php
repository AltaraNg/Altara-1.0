<?php

use Illuminate\Database\Seeder;

class RenewalStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = ['successful', 'callback', 'unreachable'];

        for ($i=0; $i<count($status); $i++){
            \App\RenewalStatus::create([
                'status' => $status[$i]
            ]);
        }
    }
}
