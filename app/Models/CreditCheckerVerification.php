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
      'credit_check_no',
      'customer.first_name', 'customer.last_name', 'customer.middle_name', 'customer.telephone',
      'vendor.full_name', 'vendor.phone_number'
   ];

   public function bnplProduct()
   {
      return $this->belongsTo(BnplVendorProduct::class, 'bnpl_vendor_product_id');
   }

   public function product()
   {
      return $this->belongsTo(Product::class, 'product_id');
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

    public function repaymentDuration()
    {
        return $this->belongsTo(RepaymentDuration::class);
    }

    public function repaymentCycle()
    {
        return $this->belongsTo(RepaymentCycle::class);
    }
    public function downPaymentRate()
    {
        return $this->belongsTo(DownPaymentRate::class, 'down_payment_rate_id');
    }
    public function businessType()
    {
        return $this->belongsTo(BusinessType::class);
    }
}
