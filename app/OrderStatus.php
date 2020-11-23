<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    const APPROVED = 'Approved';
    const PENDING = 'Pending';
    const ACTIVE = 'Active';
    const CLOSED = 'Closed';
    //
    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
