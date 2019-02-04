<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   protected $fillable = [
      'sku',
      'name',
      'description',
      'user_id',
      'sold_by',
      'received_by',
      'branch_id',
      'brand_id',
      'category_id',
      'supplier_id',
      'invoice_id',
      'purchase_order_id',
      'price',
      'supplier_price',
      'availability_status',
      'date_sold',
      'date_received',
      'date_supplied'
   ];

   public function adder()
   {
      return $this->belongsTo(User::class, 'user_id', 'id');
   }

   public function seller()
   {
      return $this->belongsTo(User::class, 'sold_by', 'id');
   }

   public function receiver()
   {
      return $this->belongsTo(User::class, 'received_by', 'id');
   }

   public function brand()
   {
      return $this->belongsTo(Brand::class);
   }

   public function branch()
   {
      return $this->belongsTo(Branch::class);
   }

   public function category()
   {
      return $this->belongsTo(Category::class);
   }

   public function supplier()
   {
      return $this->belongsTo(Supplier::class);
   }

}
