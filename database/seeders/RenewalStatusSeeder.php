<?php

use Illuminate\Database\Seeder;

class RenewalStatusSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $status = ['successful', 'callback', 'unreachable'];

        for ($i=0; $i<count($status); $i++){
            \App\Models\RenewalStatus::create([
                'status' => $status[$i]
            ]);
        }
    }
}
