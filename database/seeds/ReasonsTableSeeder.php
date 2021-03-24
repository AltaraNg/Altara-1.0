<?php

namespace Database\Seeders;

use App\Reason;
use Illuminate\Database\Seeder;

class ReasonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Reason::create([
            'reason' => "Product Unavailable (We don't sell product type/brand)",
            'is_active' => true
        ]);
        Reason::create([
            'reason' => "Product Out of Stock ",
            'is_active' => true
        ]);
        Reason::create([
            'reason' => "Approval Criteria Disinterest",
            'is_active' => true
        ]);
        Reason::create([
            'reason' => "Process too long",
            'is_active' => true
        ]);
        Reason::create([
            'reason' => "Poor Customer Service",
            'is_active' => true
        ]);
        Reason::create([
            'reason' => "Already Purchased from somewhere else",
            'is_active' => true
        ]);
        Reason::create([
            'reason' => "Not Applicable (Customer Purchased)",
            'is_active' => true
        ]);
    }
}
