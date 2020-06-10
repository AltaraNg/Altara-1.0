<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewOrder extends Model
{
    //

    public function businessType(){
        return $this->hasOne(BusinessType::class);
    }

    public function paymentMethod(){
        return $this->hasOne(PaymentMethod::class);
    }

    public function repaymentCycle(){
        return $this->hasOne(RepaymentCycle::class);
    }
    public function downPaymentRate(){
        return $this->hasOne(DownPaymentRate::class);
    }

    public function repaymentDuration (){
        return $this->hasOne(RepaymentDuration::class);
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
}

