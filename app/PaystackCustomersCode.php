<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaystackCustomersCode extends Model
{
    protected $guarded = [];
    protected $table = "paystack_customers_code";
    public static function rules()
    {
        return [
            'id' => 'required|exists:customers,id',
            'customer_code' => 'required|string',
        ];
    }
}
