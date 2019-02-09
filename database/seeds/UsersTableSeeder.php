<?php

use App\Role;
use App\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        $user = new User();
        $user->role_id = 1;
        $user->staff_id = 'AC/IT/2018/0001';
        $user->full_name = 'ibeanu hillary Arinze';
        $user->date_of_appointment = '2016-02-02';
        $user->status = 'married';
        $user->category = 'permanent';
        $user->phone_number = '08163145041';
        $user->password = bcrypt('clinsmann');
        $user->email = 'ibeanuhillary@gmail.com';
        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'Odoh Obum';
        $user->referee_2 = 'Frank Akubuchi';
        $user->highest_qualification = 'masters';
        $user->branch_id = 1;
        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '2016-02-02';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'Ibeanu Nonso';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();

        $user = new User();
        $user->role_id = 2;
        $user->staff_id = 'AC/IT/2018/0002';
        $user->full_name = 'Paul 0luyege';
        $user->date_of_appointment = '2016-02-02';
        $user->status = 'married';
        $user->category = 'permanent';
        $user->phone_number = '08163145042';
        $user->password = bcrypt('password');
        $user->email = 'ibeanuhillary2@gmail.com';
        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'Odoh Obum';
        $user->referee_2 = 'Frank Akubuchi';
        $user->highest_qualification = 'masters';
        $user->branch_id = 2;
        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '2016-02-02';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'Ibeanu Nonso';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();

        $user = new User();
        $user->role_id = 7;
        $user->staff_id = 'AC/IT/2018/0003';
        $user->full_name = 'Taiwo Aneniyi';
        $user->date_of_appointment = '2016-02-02';
        $user->status = 'married';
        $user->category = 'permanent';
        $user->phone_number = '08163145043';
        $user->password = bcrypt('password');
        $user->email = 'ibeanuhillary3@gmail.com';
        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'Odoh Obum';
        $user->referee_2 = 'Frank Akubuchi';
        $user->highest_qualification = 'masters';
        $user->branch_id = 3;
        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '2016-02-02';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'Ibeanu Nonso';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();

        $user = new User();
        $user->role_id = 7;
        $user->staff_id = 'AC/IT/2018/0004';
        $user->full_name = 'ibeanu hillary SEL';
        $user->date_of_appointment = '2016-02-02';
        $user->status = 'married';
        $user->category = 'permanent';
        $user->phone_number = '08163145044';
        $user->password = bcrypt('password');
        $user->email = 'ibeanuhillary4@gmail.com';
        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'Odoh Obum';
        $user->referee_2 = 'Frank Akubuchi';
        $user->highest_qualification = 'masters';
        $user->branch_id = 4;
        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '2016-02-02';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'Ibeanu Nonso';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();


        $gender = ['male', 'female'];
        $qualifications = ['bachelors', 'masters', 'doctorate'];
        $statuses = ['married', 'single', 'divorced', 'complicated'];
        $categories = [ 'contract', 'freelance','permanent'];
        $faker = Factory::create();

        foreach (range(5, 150) as $i) {
            $rand = rand(5, 28);
            $category = $categories[rand(0,2)];
            User::create([
                'role_id' => $rand,
                'staff_id' => $this->generateStaffID($category),
                'full_name' => $faker->firstName . ' ' . $faker->lastName . ' ' . $faker->lastName,
                'date_of_appointment' => '2016-' . $this->getMonth() . '-' . $this->getDay(),
                'status' => $statuses[rand(0, 3)],
                'phone_number' => $faker->unique()->phoneNumber,
                'password' => bcrypt('password'),
                'email' => $faker->unique()->email,
                'address' => $faker->address,
                'gender' => $gender[rand(0, 1)],
                'referee_1' => $faker->firstName . ' ' . $faker->lastName,
                'referee_2' => $faker->firstName . ' ' . $faker->lastName,
                'highest_qualification' => $qualifications[rand(0, 2)],
                'branch_id' => rand(1, 6),
                'category' => $category,
                'referee_1_phone_no' => $faker->phoneNumber,
                'referee_2_phone_no' => $faker->phoneNumber,
                'date_of_birth' => '1990-' . $this->getMonth() . '-' . $this->getDay(),
                'hr_id' => 1,
                'nationality' => 'nigeria',
                'next_of_kin_name' => $faker->firstName . ' ' . $faker->lastName,
                'next_of_kin_phone_no' => $faker->phoneNumber
            ]);
        }
    }

    public function getDay()
    {
        $day = rand(1, 30);
        if ($day < 10) $day = '0' . $day;
        return $day;
    }

    public function getMonth()
    {
        $month = rand(1, 12);
        if ($month < 10) $month = '0' . $month;
        return $month;
    }

    public function generateStaffID($category)
    {
        $count = User::count() + 1;
        $prefix = '';
        $num = '';
        if ($category === 'contract') $prefix = 'AC/C/';
        if ($category === 'permanent') $prefix = 'ACL/';
        if ($category === 'freelance') $prefix = 'AC/F/';
        if (strlen((string)$count) === 1) $num = '00' . $count;
        else if (strlen((string)$count) === 2) $num = '0' . $count;
        else if (strlen((string)$count) >= 3) $num = $count;
        $id = $prefix . $num . '/' . date("y");
        return $id;
    }
}
