<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Verification extends Model
{
   protected $guarded = [];

   protected $hidden = [];

   public function customer()
   {
      return $this->belongsTo(Customer::class);
   }
}
