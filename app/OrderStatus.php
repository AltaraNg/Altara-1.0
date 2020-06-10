<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    //
    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
