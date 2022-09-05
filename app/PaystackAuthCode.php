<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaystackAuthCode extends Model
{

    protected $guarded = [];
    protected $table = "paystack_auth_code";
    public $timestamps = false;
    public static function rules()
    {
        return [
            'order_id' => 'required|exists:new_orders,id',
            'auth_code' => 'required'
        ];
    }
    public function order()
    {
        return $this->belongsTo(NewOrder::class, 'order_id');
    }
}
