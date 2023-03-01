<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CreditCheckerVerification extends Model
{

    const PENDING = 'pending';
    const PASSED = 'passed';
    const FAILED = 'failed';
    const STATUSES = [self::PENDING, self::PASSED, self::FAILED];

    protected $guarded = [];

    public function bnplProduct()
    {
       return $this->belongsTo(BnplVendorProduct::class, 'bnpl_vendor_product_id');
    }

    public function customer()
    {
       return $this->belongsTo(Customer::class, 'bnpl_vendor_product_id');
    }

    public function vendor()
    {
       return $this->belongsTo(User::class, 'initiated_by');
    }

}
