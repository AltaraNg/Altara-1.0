<?php

namespace App\Http\Requests;

use App\Models\GuarantorPaystackAuthCode;
use Illuminate\Foundation\Http\FormRequest;

class GuarantorPaystackRequest extends FormRequest
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
                return GuarantorPaystackAuthCode::rules();
            }
            case 'PUT': {
                return GuarantorPaystackAuthCode::updateRules($this->product->id);
            }
            default:break;
        }
    }
}
