<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AltaraPayDdData extends Model
{
    protected $guarded = [];
    public $timestamps = false;

    public static function rules()
    {
        return [
            'customer_id' => 'required|exists:customers,id',
            'order_id' => 'required|exists:new_orders,order_number',
            'sal_sug_date_1' => 'required|numeric',
            'sal_sug_date_2' => 'required|numeric',
            'sal_sug_date_3' => 'required|numeric',
            'proof_of_salary_bank' => 'required|string',
            'guarantor_signed' => 'required|string',
            'address_visited' => 'required|string',
            'credit_point' => 'required|string',
            'credit_report' => 'required|string',
            'mode' => 'required|string'
        ];
    }
}
