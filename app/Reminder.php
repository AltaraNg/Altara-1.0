<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    protected $fillable = ["customer_id", "order_id", "sms_id", "repayment_level", "feedback", "dva_id", "type"];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function purchase()
    {
        return $this->belongsTo(Purchase::class, 'order_id', 'order_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'dva_id','id');
    }
}
