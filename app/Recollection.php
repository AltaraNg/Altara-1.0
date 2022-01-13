<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recollection extends Model
{
    protected $guarded = [];

    public function newOrder()
    {
        return $this->belongsTo(NewOrder::class, 'new_order_id');
    }
}
