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
        //
        $user = new User();
        $user->role_id =  1;
        $user->staff_id = 'AC/IT/2018/0001';
        $user->full_name = 'ibeanu hillary 1';
        $user->date_of_appointment = '2016-02-02';
        $user->date_of_exit = '2016-02-02';
        $user->status = 'married';
        $user->phone_number = '08163145049';
        $user->password = bcrypt('clinsmann');
        $user->email = 'ibeanuhillary@gmail.com';
        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'me';
        $user->referee_2 = 'me';

        $user->highest_qualification = 'masters';
        $user->branch_id = 3;


        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '2016-02-02';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'me';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();



        $user = new User();
        $user->role_id =  5;
        $user->staff_id = 'AC/IT/2018/0002';
        $user->full_name = 'ibeanu hillary 2';
        $user->date_of_appointment =  '2016-02-02';
        $user->date_of_exit = '2016-02-02';
        $user->status = 'married';
        $user->phone_number = '08163145042';
        $user->password = bcrypt('clinsmann2');
        $user->email = 'ibeanuhillary2@gmail.com';


        $user->highest_qualification = 'masters';
        $user->branch_id = 3;

        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'me';
        $user->referee_2 = 'me';
        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '2016-02-02';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'me';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();





        $user = new User();
        $user->role_id =  11;
        $user->staff_id = 'clinsmann3';
        $user->full_name = 'ibeanu hillary';
        $user->date_of_appointment =  '2016-02-02';
        $user->date_of_exit = '2016-02-02';
        $user->status = 'married';
        $user->phone_number = '08163145043';
        $user->password = bcrypt('clinsmann3');
        $user->email = 'ibeanuhillary3@gmail.com';


        $user->highest_qualification = 'master';
        $user->branch_id = 2;

        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'me';
        $user->referee_2 = 'me';
        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '2016-02-02';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'me';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();





        $user = new User();
        $user->role_id =  10;
        $user->staff_id = 'AC/IT/2018/0004';
        $user->full_name = 'ibeanu hillary 4';
        $user->date_of_appointment =  '2016-02-02';
        $user->date_of_exit = '2016-02-02';
        $user->status = 'married';
        $user->phone_number = '08163145044';
        $user->password = bcrypt('clinsmann4');
        $user->email = 'ibeanuhillary4@gmail.com';


        $user->highest_qualification = 'master';
        $user->branch_id = 2;

        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'me';
        $user->referee_2 = 'me';
        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '2016-02-02';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'me';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();
    }
}
