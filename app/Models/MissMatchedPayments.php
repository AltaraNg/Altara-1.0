<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MissMatchedPayments extends Model
{
   use SoftDeletes;
   protected $guarded = [];

   public function customer()
   {
      return $this->belongsTo(Customer::class, 'customer_id');
   }

   public function order()
   {
      return $this->belongsTo(NewOrder::class, 'order_id');
   }
}
