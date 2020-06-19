<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RepaymentCycle extends Model
{
    //
    public function newOrder(){
        return $this->hasMany(NewOrder::class);
    }
}
