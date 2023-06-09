<?php


use App\Models\CustomerStage;
use Illuminate\Database\Seeder;

class CustomerStageSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        CustomerStage::truncate();
        CustomerStage::create([
            "name" => "Registered On Portal",
            "is_active" => true
        ]);
        CustomerStage::create([
            "name" => "Paid Affidavit",
            "is_active" => true
        ]);
        CustomerStage::create([
            "name" => "KYC Documents Submitted",
            "is_active" => true
        ]);
        CustomerStage::create([
            "name" => "Passed Verification",
            "is_active" => true
        ]);
        CustomerStage::create([
            "name" => "Failed Verification",
            "is_active" => true
        ]);
        CustomerStage::create([
            "name" => "Ready to pay downpayment (Product Available)",
            "is_active" => true
        ]);
        CustomerStage::create([
            "name" => "Ready to pay downpayment (Product Unavailable)",
            "is_active" => true
        ]);
        CustomerStage::create([
            "name" => "Paid Downpayment and Product Picked Up",
            "is_active" => true
        ]);
        CustomerStage::create([
            "name" => "Paid Downpayment and Product Not Picked Up",
            "is_active" => true
        ]);
    }
}
