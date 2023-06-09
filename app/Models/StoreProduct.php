<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoreProduct extends Model
{
    //protected $table = 'store_products';

    protected $table = 'new_products';

    /*public function order()
    {
        return $this->belongsTo(Order::class);
    }*/
    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
