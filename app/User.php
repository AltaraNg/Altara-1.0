<?php

namespace App;

use App\Helper\DataViewer;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /** this is a generic trait created to serve as a generic
     * scope for fetching and paginating the
     * model where it is called */
    use DataViewer;

    protected $guarded = [];

    protected $hidden = ['password', 'remember_token', 'api_token', 'hr_id'];

    /** columns to be used to render the list(Data viewer) of user in the view*/
    public static $columns = [
        'id', 'full_name', 'staff_id', 'phone_number', 'portal_access', 'email', 'date_of_appointment'
    ];

    /** this is the user object form, it is sent to the js
     * view when the user creation
     * form is required */

    public static function Form() : iterable
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
            'guarantor_name' => '',
            'guarantor_phone_no' => '',
            'guarantor_address' => '',
            'guarantor_relationship' => '',
            'guarantor_name_2' => '',
            'guarantor_phone_no_2' => '',
            'guarantor_address_2' => '',
            'guarantor_relationship_2' => '',
            'cv' => '',
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

    public function suppliers()
    {
        return $this->hasMany(Supplier::class);
    }
     public  function  inventories()
     {
         return $this->hasMany(Inventory::class);
     }

    public function productsAdded()
    {
        return $this->hasMany(Product::class, 'user_id', 'id');
    }

    public function productsSold()
    {
        return $this->hasMany(Product::class, 'sold_by', 'id');
    }

    public function productsReceived()
    {
        return $this->hasMany(Product::class, 'received_by', 'id');
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }

    public function cautions()
    {
        return $this->hasMany(Caution::class);
    }

    public function cautionsIssued()
    {
        return $this->hasMany(Caution::class, 'issuer_id', 'id');
    }

    /*public function counterSales()
    {
        return $this->hasMany(Order::class, 'sales_agent_id', 'staff_id');
    }*/

    /*public function reminders()
    {
        return $this->hasMany(Reminder::class, 'id','dva_id');
    }*/

}