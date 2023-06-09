<?php

namespace App\Models;

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
