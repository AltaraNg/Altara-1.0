<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Repayment extends Model
{
    /*public function customer(){
        return $this->belongsTo(Customer::class);
    }*/

    public function order()
    {
        return $this->hasOne(Order::class,'repayment_id','id');
    }
}
