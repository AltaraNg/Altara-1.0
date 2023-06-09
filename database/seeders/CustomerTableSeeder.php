<?php

use App\Customer;
use App\Document;
use App\State;
use App\Verification;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('customers')->delete();
        $faker = Factory::create();
        $state = State::get();
        $typesOfHome = ['Family', 'Owned', 'Rented'];
        $gender = ['male', 'female'];
        $civilStatus = ['Single', 'Married', 'Divorced', 'Widow', 'Live Together'];
        $highestLevelOfEdu = ['No studies', 'Secondary', 'Polytechnic', 'Primary', 'University', 'Masters',];
        $dsa = [1, 2, 8, 9, 15, 17];
        $data = DB::table('users')->whereIn('role_id', $dsa)->get();
        $dataLength = (int)($data->count() - 1);
        $employmentStatus = ['Formal', 'Informal(Business)', 'Unemployed'];

        foreach (range(1, 500) as $i) {
            $rand = (int)rand(0, $dataLength);
            $customer = Customer::create([
                'employee_name' => $data[$rand]->full_name,
                'user_id' => $data[$rand]->id,
                'employee_id' => $data[$rand]->staff_id,
                'date_of_registration' => '2018-10-' . $this->getDay(),
                'branch_id' => $data[$rand]->branch_id,
                'first_name' => $faker->firstName,
                'middle_name' => $faker->firstName,
                'last_name' => $faker->firstName,
                'add_nbstop' => $faker->streetSuffix,
                'add_street' => $faker->streetName,
                'area_address' => $faker->streetAddress,
                'add_houseno' => $faker->buildingNumber,
                'add_addinfo_description' => $faker->sentence,
                'city' => $faker->city,
                'state' => $state[rand(0, ($state->count() - 1))]->name,
                'telephone' => $faker->phoneNumber,
                'email' => $faker->email,
                'gender' => $gender[rand(0, 1)],
                'date_of_birth' => '1990-' . $rand . '-02',
                'civil_status' => $civilStatus[rand(0, 4)],
                'year_together' => $rand,
                'type_of_home' => $typesOfHome[rand(0, 2)],
                'no_of_rooms' => rand(0, 5),
                'duration_of_residence' => rand(0, 5),
                'people_in_household' => rand(0, 5),
                'number_of_work' => rand(0, 5),
                'depend_on_you' => rand(0, 5),
                'number_of_children' => rand(0, 5),
                'level_of_education' => $highestLevelOfEdu[rand(0, 5)],
                'visit_hour_from' => '08:00',
                'visit_hour_to' => '17:00',
                'loan_from_institution' => 'no',
                'employment_status' => $employmentStatus[rand(0, 2)],
                'working_individual_Phone_number' => $faker->phoneNumber,
                'name_of_company_or_business' => $faker->company,
                'cadd_nbstop' => $faker->streetSuffix,
                'cadd_addinfo' => $faker->sentence,
                'company_city' => $faker->city,
                'company_state' => $state[rand(0, ($state->count() - 1))]->name,
                'company_telno' => $faker->phoneNumber,
                'receive_income_means' => 'cheque',
                'post_in_company' => $faker->jobTitle,
                'days_of_work' => 'Monday Tuesday Wednesday Thursday Friday',
                'market_name' => $faker->streetName,
                'bank_account' => $faker->bankAccountNumber,
                'monthly_gains' => $rand * 10000,
                'years_of_existence_or_work_duration' => rand(3, 7),
                'comp_street_name' => $faker->streetName,
                'comp_house_no' => $faker->buildingNumber,
                'comp_area' => $faker->streetAddress,
                'current_sal_or_business_income' => $rand * 10000,
                'payment_period' => 'monthly',
                'cvisit_hour_from' => '08:00',
                'cvisit_hour_to' => '17:00',
                'nextofkin_first_name' => $faker->firstName,
                'nextofkin_middle_name' => $faker->lastName,
                'nextofkin_last_name' => $faker->lastName,
                'nextofkin_relationship' => 'father',
                'nextofkin_gender' => $gender[rand(0, 1)],
                'nextofkin_telno' => $faker->phoneNumber,
                'nextofkin_work_duration' => rand(2, 5),
                'work_guarantor_first_name' => $faker->firstName,
                'work_guarantor_middle_name' => $faker->lastName,
                'work_guarantor_last_name' => $faker->lastName,
                'work_guarantor_relationship' => 'employee',
                'guaadd_nbstop' => $faker->streetAddress,
                'guaadd_street' => $faker->streetName,
                'guaadd_houseno' => $faker->buildingNumber,
                'guaadd_addinfo' => $faker->streetAddress,
                'gua_area' => $faker->streetAddress,
                'work_guarantor_city' => $faker->city,
                'work_guarantor_state' => $state[rand(0, ($state->count() - 1))]->name,
                'work_guarantor_gender' => $gender[rand(0, 1)],
                'work_guarantor_telno' => $faker->phoneNumber,
                'work_guarantor_work_duration' => rand(2, 5),
                'personal_guarantor_first_name' => $faker->firstName,
                'personal_guarantor_middle_name' => $faker->lastName,
                'personal_guarantor_last_name' => $faker->lastName,
                'personal_guarantor_relationship' => 'family',
                'personal_guarantor_city' => $faker->city,
                'personal_guarantor_state' => $state[rand(0, ($state->count() - 1))]->name,
                'pguaadd_nbstop' => $faker->streetAddress,
                'pguaadd_street' => $faker->streetName,
                'pguaadd_houseno' => $faker->buildingNumber,
                'pguaadd_addinfo' => $faker->streetAddress,
                'pgua_area' => $faker->city,
                'personal_guarantor_gender' => $gender[rand(0, 1)],
                'personal_guarantor_telno' => $faker->phoneNumber,
                'personal_guarantor_work_duration' => rand(2, 5),
                'what_product_do_you_need' => $faker->words(rand(2, 6), true),
                'what_do_you_need_it_for' => $faker->sentence,
            ]);
            Verification::create([
                'customer_id' => $customer->id,
                'passport' => 0,
                'id_card' => 0,
                'address' => 0,
                'work_guarantor' => 0,
                'personal_guarantor' => 0,
                'processing_fee' => 0,
            ]);
            Document::create([
                'customer_id' => $customer->id,
                'id_card_url' => '',
                'passport_url' => '',
            ]);
        }
    }

    /**
     * Run the database seeders.
     *
     * @return void
     */

    public function getDay()
    {
        $day = rand(1, 30);
        if ($day < 10) $day = '0' . $day;
        return $day;
    }
}
