<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDiscounts extends Model
{
    //
    public function newOrder(){
        return $this->hasOne(NewOrder::class);
    }
    public function discount()
    {
        return $this->hasOne(Discount::class);
    }
}
