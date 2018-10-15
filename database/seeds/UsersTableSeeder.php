<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->role_id =  1;
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
        $user->role_id =  2;
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
        $user->role_id =  3;
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
        $user->role_id =  8;
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
    }
}
