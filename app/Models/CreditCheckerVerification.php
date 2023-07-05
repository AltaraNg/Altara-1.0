<?php

namespace App\Models;

use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;


class CreditCheckerVerification extends Model
{

   use SearchableTrait;
   const PENDING = 'pending';
   const PASSED = 'passed';
   const FAILED = 'failed';
   const STATUSES = [self::PENDING, self::PASSED, self::FAILED];

   protected $guarded = [];

   /**
    * Searchable attributes
    *
    * @return string[]
    */
   public  $searchable = [
      'customer_id',
      'bnplProduct.name',
      'customer.first_name', 'customer.last_name', 'customer.middle_name', 'customer.telephone',
      'vendor.full_name', 'vendor.phone_number'
   ];

   public function bnplProduct()
   {
      return $this->belongsTo(BnplVendorProduct::class, 'bnpl_vendor_product_id');
   }

   public function customer()
   {
      return $this->belongsTo(Customer::class, 'customer_id');
   }

   public function vendor()
   {
      return $this->belongsTo(User::class, 'initiated_by');
   }
   public function documents(): MorphMany
    {
        return $this->morphMany(NewDocument::class, 'documentable');
    }
}
