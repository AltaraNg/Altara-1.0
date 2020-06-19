<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewOrder extends Model
{
    //
    protected $with = ['amortization'];

    public function businessType(){
        return $this->hasOne(BusinessType::class);
    }

    public function paymentMethod(){
        return $this->hasOne(PaymentMethod::class);
    }

    public function downPaymentRate(){
        return $this->hasOne(DownPaymentRate::class);
    }

    public function repaymentDuration (){
        return $this->belongsTo(RepaymentDuration::class);
    }

    public function repaymentCycle(){
        return $this->belongsTo(RepaymentCycle::class);
    }

    public function amortization(){
        return $this->hasMany(Amortization::class);
    }

    public function orderStatus(){
        return $this->hasOne(OrderStatus::class);
    }
    public function customer(){
        return $this->belongsTo(Customer::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function orderDiscount(){
        return $this->belongsTo(OrderDiscounts::class);
    }
    public function product(){
        return $this->hasMany(StoreProduct::class);
    }

    public function customDate(){
        return $this->hasOne(CustomRepaymentDate::class);
    }

    public function defaulter(){
        $onTime = $this->amortization()->where('actual_amount','>',1)->count();
        $total = $this->amortization()->count();
        return ($onTime /$total) * 100;
    }
}

