<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Repayment extends Model
{
    /*public function customer(){
        return $this->belongsTo(Customer::class);
    }*/

    public function purchase(){
        return $this->hasOne(Purchase::class,'repayment_id','order_id');
    }
}
