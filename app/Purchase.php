<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $table = "purchase";

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function floorAgent()
    {
        return $this->belongsTo(User::class, 'sales_agent_id', 'staff_id');
    }

    public function repayment()
    {
        return $this->hasOne(Repayment::class, 'repayment_id', 'order_id');
    }

    public function reminders()
    {
        return $this->hasMany(Reminder::class,'order_id','order_id');
    }
}
