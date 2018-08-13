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
        $user->staff_id = 'clinsmann';
        $user->full_name = 'ibeanu hillary';
        $user->date_of_appointment =  '02/02/2016';
        $user->date_of_exit = '02/02/2016';
        $user->status = 'married';
        $user->phone_number = '08163145041';
        $user->password = bcrypt('clinsmann');
        $user->email = 'ibeanuhillary@gmail.com';
        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'me';
        $user->referee_2 = 'me';
        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '02/02/2016';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'me';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();



        $user = new User();
        $user->role_id =  1;
        $user->staff_id = 'clinsmann2';
        $user->full_name = 'ibeanu hillary';
        $user->date_of_appointment =  '02/02/2016';
        $user->date_of_exit = '02/02/2016';
        $user->status = 'married';
        $user->phone_number = '08163145042';
        $user->password = bcrypt('clinsmann2');
        $user->email = 'ibeanuhillary2@gmail.com';
        $user->address = 'ibadan';
        $user->gender = 'male';
        $user->referee_1 = 'me';
        $user->referee_2 = 'me';
        $user->referee_1_phone_no = '08163145041';
        $user->referee_2_phone_no = '08163145041';
        $user->date_of_birth = '02/02/2016';
        $user->hr_id = 1;
        $user->nationality = 'nigeria';
        $user->next_of_kin_name = 'me';
        $user->next_of_kin_phone_no = '08163145041';
        $user->save();

    }
}
