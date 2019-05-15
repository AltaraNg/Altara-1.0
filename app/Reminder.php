<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    protected $fillable = ["customer_id", "order_id", "sms_id", "repayment_level", "feedback", "dva_id", "type"];

    public $timestamps = false;

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'dva_id', 'id');
    }

    public function sms()
    {
        return $this->hasOne(Message::class, 'id', 'sms_id');
    }
}
