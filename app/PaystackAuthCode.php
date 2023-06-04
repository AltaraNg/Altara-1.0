<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaystackAuthCode extends Model
{

    protected $guarded = [];
    protected $table = "paystack_auth_code";
    protected $primaryKey = 'order_id';
    public $timestamps = false;
    public static function rules()
    {
        return [
            'order_id' => 'required|exists:new_orders,order_number',
            'auth_code' => 'required',
            'account_number' => ['sometimes', 'string', 'min:4'],
            'account_name' => ['sometimes', 'string'],
            'bank_name' => ['sometimes', 'string'],
        ];
    }
    public function order()
    {
        return $this->belongsTo(NewOrder::class, 'order_id', 'order_number');
    }
}