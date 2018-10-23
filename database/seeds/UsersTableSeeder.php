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
        $user->date_of_exit = '2016-02-02';
        $user->status = 'married';
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
        $user->full_name = 'ibeanu hillary GM';
        $user->date_of_appointment = '2016-02-02';
        $user->date_of_exit = '2016-02-02';
        $user->status = 'married';
        $user->phone_number = '08163145042';
        $user->password = bcrypt('clinsmann');
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
        $user->role_id = 3;
        $user->staff_id = 'AC/IT/2018/0003';
        $user->full_name = 'ibeanu hillary PM';
        $user->date_of_appointment = '2016-02-02';
        $user->date_of_exit = '2016-02-02';
        $user->status = 'married';
        $user->phone_number = '08163145043';
        $user->password = bcrypt('clinsmann');
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
        $user->role_id = 8;
        $user->staff_id = 'AC/IT/2018/0004';
        $user->full_name = 'ibeanu hillary SEL';
        $user->date_of_appointment = '2016-02-02';
        $user->date_of_exit = '2016-02-02';
        $user->status = 'married';
        $user->phone_number = '08163145044';
        $user->password = bcrypt('clinsmann');
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
        $faker = Factory::create();

        foreach (range(5, 50) as $i) {
            $rand = rand(5, 23);
            $role = Role::find($rand);
            User::create([
                'role_id' => $role->id,
                'staff_id' => 'AC/' . $role->description . '/2018/000' . $i,
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
}
