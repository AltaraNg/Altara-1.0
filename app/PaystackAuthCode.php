<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaystackAuthCode extends Model
{

    protected $guarded = [];
    protected $table = "paystack_auth_code";
    public static function rules()
    {
        return [
            'order_id' => 'required|exists:new_orders,order_number',
            'auth_code' => 'required'
        ];
    }
}
