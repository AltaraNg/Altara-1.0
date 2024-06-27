<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
   protected $fillable = ['staff_id', 'description', 'action'];

   public function user()
   {
      return $this->belongsTo(User::class, 'staff_id', 'staff_id');
   }
}
