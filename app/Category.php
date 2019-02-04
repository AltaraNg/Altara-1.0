<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
   public $timestamps = false;

   protected $fillable = ['name'];

   public function brands()
   {
      return $this->belongsToMany(Brand::class, 'brand_category', 'category_id', 'brand_id');
   }

   public function products()
   {
      return $this->hasMany(Product::class);
   }

   public function suppliers()
   {
      return $this->hasMany(Supplier::class);
   }

}
