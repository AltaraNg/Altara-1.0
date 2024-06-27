<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;

class PriceCalculator extends Model
{
    protected $guarded = [];
    /**
     * Validation rules
     *
     * @return array
     * @var array
     */

    public static function rules($data)
    {
        return [
            'label' => 'required|unique:price_calculators,label',
            'margin' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'tax' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'interest' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'business_type_id' => 'required|exists:business_types,id',
            'down_payment_rate_id' => 'required|exists:down_payment_rates,id',
            'repayment_duration_id' => [
                'required',
                'exists:repayment_durations,id',
                Rule::unique('price_calculators')->where(function ($query) use ($data) {
                    return $query->where('business_type_id', $data['business_type_id'])
                        ->where('down_payment_rate_id', $data['down_payment_rate_id']);
                }),
            ],
            'is_active' => 'sometimes|required|boolean'
        ];
    }

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function updateRules($data)
    {
        return [
            'label' => 'sometimes|required|unique:price_calculators,label,'. $data->price_calculator->id ,
            'margin' => 'sometimes|required|regex:/^\d+(\.\d{1,2})?$/',
            'tax' => 'sometimes|required|regex:/^\d+(\.\d{1,2})?$/',
            'interest' => 'sometimes|required|regex:/^\d+(\.\d{1,2})?$/',
            'business_type_id' => 'sometimes|required|exists:business_types,id',
            'down_payment_rate_id' => 'sometimes|required|exists:down_payment_rates,id',
            'repayment_duration_id' => [
                'sometimes',
                'required',
                'exists:repayment_durations,id',
                Rule::unique('price_calculators')->where(function ($query) use ($data) {
                    return $query->where('business_type_id', $data['business_type_id'])
                        ->where('down_payment_rate_id', $data['down_payment_rate_id']);
                })->ignore($data->price_calculator->id),
            ],
            'is_active' => 'sometimes|required|boolean'
        ];
    }


    public function downPaymentRate()
    {
        return $this->belongsTo(DownPaymentRate::class);
    }

    public function businessType(){
        return $this->belongsTo(BusinessType::class);
    }
}
