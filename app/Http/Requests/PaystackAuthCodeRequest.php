<?php

namespace App\Http\Requests;

use App\PaystackAuthCode;
use Illuminate\Foundation\Http\FormRequest;

class PaystackAuthCodeRequest extends FormRequest
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
        return PaystackAuthCode::rules();
    }
}
