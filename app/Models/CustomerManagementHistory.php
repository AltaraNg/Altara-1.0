<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerManagementHistory extends Model
{
    protected $hidden = ['created_at', 'updated_at'];

    protected $guarded = [];

    public function manager()
    {
        return $this->belongsTo(User::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
