<?php

namespace App\Http\Requests;

use App\DirectDebitResult;
use Illuminate\Foundation\Http\FormRequest;

class DirectDebitResultRequest extends FormRequest
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
        return DirectDebitResult::rules();
    }
}
