<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RepaymentCycle extends Model
{
    const BIMONTHLY = 'bi_monthly';
    const MONTHLY = 'monthly';
    const CUSTOM = 'custom';
    //
    public function newOrder(){
        return $this->hasMany(NewOrder::class);
    }
}
