<?php

namespace App\Http\Requests;

use App\DirectDebit;
use Illuminate\Foundation\Http\FormRequest;

class DirectDebitRequest extends FormRequest
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
        return DirectDebit::rules();
    }
}
