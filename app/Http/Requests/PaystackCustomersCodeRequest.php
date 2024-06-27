<?php

namespace App\Http\Requests;

use App\Models\PaystackCustomersCode;
use Illuminate\Foundation\Http\FormRequest;

class PaystackCustomersCodeRequest extends FormRequest
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

    public function rules()
    {
        return PaystackCustomersCode::rules();
    }
}
