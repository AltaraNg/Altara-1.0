<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    //protected $table = "purchase";
    protected $table = "purchases";

    protected $primaryKey ='order_id';

    protected $incrementing = false;

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
