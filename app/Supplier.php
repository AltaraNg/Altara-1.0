<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
//    protected $table = 'suppliers';

   protected $fillable = [
//      'user_id', 'brand_id', 'full_name', 'address', 'phone_number', 'email', 'date_of_reg', 'status', 'contact_person_name'
   ];

   public function user()
   {
//      return $this->belongsTo(User::class);
   }

   public function products()
   {
//      return $this->hasMany(Product::class, 'supplier_id', 'id');
   }

   /*public function category()
   {
      return $this->belongsTo(Category::class);
   }*/

    public function categories()
    {
//        return $this->belongsToMany(Category::class, 'supplier_category', 'supplier_id', 'category_id');
    }

}
