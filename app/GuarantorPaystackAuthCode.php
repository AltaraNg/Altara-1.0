<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GuarantorPaystackAuthCode extends Model
{
    //

    protected $guarded = [];

    public function customers()
    {
        return $this->belongsTo(Customer::class);
    }

    public static function rules()
    {
        return [
            'customer_id' => 'required|exists:customers,id',
            'guarantor_email' => 'required|email',
            'guarantor_name' => 'required',
            'auth_code' => 'required'
        ];
    }

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function updateRules($id)
    {
        return [
            'customer_id' => 'sometimes|exists:customers,id',
            'guarantor_email' => 'sometimes|email',
            'guarantor_name' => 'sometimes',
            'auth_code' => 'sometimes'
        ];
    }
}
