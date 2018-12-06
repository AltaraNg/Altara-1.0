<?php

namespace App;

use App\Helper\DataViewer;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    use DataViewer;

    protected $guarded = [];

    protected $hidden = [
        'password',
        'remember_token',
        'api_token',
        'hr_id',
    ];

    public static $columns = [
        'id', 'full_name', 'staff_id', 'phone_number', 'portal_access', 'email', 'date_of_appointment'
    ];

    public static function Form()
    {
        return [
            'role_id' => '',
            'staff_id' => '',
            'full_name' => '',
            'date_of_appointment' => '',
            'status' => '',
            'category' => '',
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

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function logs()
    {
        return $this->hasMany(Log::class, 'staff_id', 'staff_id');
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    public function workGuarantors()
    {
        return $this->hasMany(WorkGuarantor::class);
    }

    public function processingFees()
    {
        return $this->hasMany(ProcessingFee::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function branches()
    {
        return $this->hasMany(Branch::class);
    }

}