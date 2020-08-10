<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    const APPROVED = 'Approved';
    const PENDING = 'Pending';
    //
    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
