<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentGateway extends Model
{
    protected $table = "payment_gateways";
    const PAYSTACK = 'Paystack';
    const REMITTA = 'Remitta';

}
