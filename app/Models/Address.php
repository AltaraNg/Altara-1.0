<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
   protected $guarded = [];

   protected $hidden = [];

   public function customer()
   {
      return $this->belongsTo(Customer::class);
   }

   public function user()
   {
      return $this->belongsTo(User::class);
   }

   public static function form() : iterable
   {
      return [
         'user_id' => '',
         'staff_name' => '',
         'date_of_visit' => '',
         'time_of_visit' => '',
         'customer_id' => '',
         'customer_meetup' => '',
         'what_he_sells' => '',
         'confirm_address' => '',
         'business_info' => '',
         'product_info' => '',
         'aware_of_plan' => '',
         'info_from_neighbors_desc' => '',
         'business_or_work_duration' => '',
         'approval_status' => ''
      ];
   }
}
