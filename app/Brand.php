<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
   public $timestamps = false;

   protected $fillable = ['name'];

   public function categories()
   {
      return $this->belongsToMany(Category::class, 'brand_category', 'brand_id', 'category_id');
   }

   public function products()
   {
      return $this->hasMany(Product::class);
   }

}
