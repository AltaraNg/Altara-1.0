<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderRequest extends Model
{
    protected $guarded = [];
    protected $with = [
        'customer:id,first_name,last_name,telephone',
        'updated_by:id,full_name,staff_id,phone_number,email',
        'accepted_by:id,full_name,staff_id,phone_number,email',
        'declined_by:id,full_name,staff_id,phone_number,email'
    ];

    const STATUS_PLACED = 'placed';
    const STATUS_PROCESSED = 'processed';
    const STATUS_ACCEPTED = 'accepted';
    const STATUS_DECLINED = 'declined';


    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
    public function updated_by()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
    public function accepted_by()
    {
        return $this->belongsTo(User::class, 'accepted_by');
    }
    public function declined_by()
    {
        return $this->belongsTo(User::class, 'declined_by');
    }
}
