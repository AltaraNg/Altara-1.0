<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkGuarantor extends Model
{
    protected $guarded = [];

    protected $hidden = [];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function form()
    {
        return [
            'user_id' => '',
            'staff_name' => '',
            'customer_id' => '',
            'consent' => '',
            'date_of_call' => '',
            'time_of_call' => '',
            'report' => '',
        ];
    }
}
