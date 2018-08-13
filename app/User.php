<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'api_token',
        'hr_id',
    ];

    public static function Form(){
        return [
            'role_id' => '',
            'staff_id' => '',
            'full_name' => '',
            'date_of_appointment' => '',
            'date_of_exit' => '',
            'status' => '',
            'phone_number' => '',
            'email' => '',
            'address' => '',
            'gender' => '',
            'referee_1' => '',
            'referee_2' => '',
            'referee_1_phone_no' => '',
            'referee_2_phone_no' => '',
            'date_of_birth' => '',
            'nationality' => '',
            'next_of_kin_name' => '',
            'next_of_kin_phone_no' => '',
        ];
    }

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

}