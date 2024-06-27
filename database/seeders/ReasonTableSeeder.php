<?php


use App\Models\Reason;
use Illuminate\Database\Seeder;

class ReasonTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        //
        Reason::updateOrCreate([
            'reason' => "Product Unavailable (We don't sell product type/brand)",
            'is_active' => true
        ]);
        Reason::updateOrCreate([
            'reason' => "Product Out of Stock ",
            'is_active' => true
        ]);
        Reason::updateOrCreate([
            'reason' => "Approval Criteria Disinterest",
            'is_active' => true
        ]);
        Reason::updateOrCreate([
            'reason' => "Process too long",
            'is_active' => true
        ]);
        Reason::updateOrCreate([
            'reason' => "Poor Customer Service",
            'is_active' => true
        ]);
        Reason::updateOrCreate([
            'reason' => "Already Purchased from somewhere else",
            'is_active' => true
        ]);
        Reason::updateOrCreate([
            'reason' => "Not Applicable (Customer Purchased)",
            'is_active' => true
        ]);
    }
}
