<?php

namespace App\Http\Requests;


use App\Models\Todo;
use Illuminate\Foundation\Http\FormRequest;

class TodoRequest extends FormRequest
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
                    return Todo::rules();
                }
            case 'PUT': {
                    return Todo::updateRules();
                }
            default:
                break;
        }
    }
}
