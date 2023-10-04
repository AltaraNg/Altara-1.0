<?php

namespace App\Http\Requests;

use App\Models\NewOrder;
use Illuminate\Foundation\Http\FormRequest;

class NewOrderRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'POST': {
                return NewOrder::rules();
            }
            case 'PUT': {
                return NewOrder::updateRules($this->new_order->id);
            }
            default:break;
        }
    }
    public function messages()
    {
        return [
            'raffle_code.exists' => "This raffle code is invalid. Please try another"
        ];
    }
}
