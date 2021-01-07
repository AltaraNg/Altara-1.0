<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    public $timestamps = false;

    protected $fillable = ['name','percentage'];

    public function new_orders()
    {
        return $this->belongsToMany(
            NewOrder::class,
            'orders_discounts',
            'discount_id',
            'order_id'
        );
    }
}
