<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MissMatchedPayments extends Model
{
    protected $guarded = [];

    public function customer()
    {
       return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function order()
    {
       return $this->belongsTo(NewOrder::class, 'order_id');
    }

}
