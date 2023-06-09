<?php

namespace App\Models;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class OrderRequest extends Model
{
    use Filterable;
    protected $guarded = [];
    protected $with = [
        'customer:id,first_name,last_name,telephone',
        'processed_by:id,full_name,staff_id,phone_number,email',
        'accepted_by:id,full_name,staff_id,phone_number,email',
        'declined_by:id,full_name,staff_id,phone_number,email'
    ];

    const STATUS_PENDING = 'pending';
    const STATUS_PROCESSED = 'processed';
    const STATUS_ACCEPTED = 'accepted';
    const STATUS_DECLINED = 'declined';


    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
    public function processed_by()
    {
        return $this->belongsTo(User::class, 'processed_by');
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
