<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

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

    public static function Form()
    {
        return [
            'role_id' => '',
            'staff_id' => '',
            'full_name' => '',
            'date_of_appointment' => '',
            'status' => '',
            'phone_number' => '',
            'highest_qualification' => '',
            'branch_id' => '',
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

    //an employee registered or has many customer : user->customers
    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    //an employee belongs to a branch(just one branch) : user->branch
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    //user performed many actions i.e. a log means and action : user->logs
    public function logs()
    {
        return $this->hasMany(Log::class, 'staff_id', 'staff_id');
    }

    //this is to say an employee/user did many verifications : user->verifications
    public function verifications()
    {
        return $this->hasMany(Verification::class);
    }

    //a user has a role/a user can have one role : user->role
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    //a user/employee uploaded documents(possibly for different customers) : user->documents
    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

}