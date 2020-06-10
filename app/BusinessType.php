<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BusinessType extends Model
{
    protected $guarded = [];

    //
    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
