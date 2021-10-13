<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RenewalPrompterRequest extends FormRequest
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
        return [
            'order_id' => ['required', 'exists:new_orders,id'],
            'renewal_prompter_status_id' => ['required', 'exists:renewal_prompter_statuses,id'],
            'feedback' => ['required', 'string'],
        ];
    }
}
