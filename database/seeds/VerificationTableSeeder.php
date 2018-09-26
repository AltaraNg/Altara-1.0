<?php

use App\Verification;
use Illuminate\Database\Seeder;

class VerificationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $verification = new Verification();
        $verification->user_id = 1;
        $verification->customer_id = 1;
        $verification->passport = 1;
        $verification->id_card = 1;
        $verification->address_status = 1;
        $verification->work_guarantor_status = 1;
        $verification->personal_guarantor_status = 1;
        $verification->save();

        $verification = new Verification();
        $verification->user_id = 2;
        $verification->customer_id = 2;
        $verification->passport = 0;
        $verification->id_card = 0;
        $verification->address_status = 0;
        $verification->work_guarantor_status = 0;
        $verification->personal_guarantor_status = 0;
        $verification->save();

        $verification = new Verification();
        $verification->user_id = 1;
        $verification->customer_id = 3;
        $verification->passport = 1;
        $verification->id_card = 1;
        $verification->address_status = 1;
        $verification->work_guarantor_status = 0;
        $verification->personal_guarantor_status = 0;
        $verification->save();

        $verification = new Verification();
        $verification->user_id = 1;
        $verification->customer_id = 4;
        $verification->passport = 0;
        $verification->id_card = 0;
        $verification->address_status = 1;
        $verification->work_guarantor_status = 1;
        $verification->personal_guarantor_status = 1;
        $verification->save();

    }
}
