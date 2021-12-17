<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GeneralFeedbackRequest extends FormRequest
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
            'new_order_id' => 'required|exists:new_orders,id',
            'feedback' => ['required', 'string'],
            'follow_up_date' => ['required', 'date']
        ];
    }
}
