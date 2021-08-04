<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    const PENDING = 'Pending';
    const ACTIVE = 'Active';
    const CLOSED = 'Closed';
    const REPOSSESSED = 'Repossessed';
    //
    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
