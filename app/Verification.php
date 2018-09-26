<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Verification extends Model
{
    protected $guarded = [];

    protected $hidden = [];

    //an employee/user performed a verification : verification->user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //every verification is for a customer/belongs to a customer : verifications->customer
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
