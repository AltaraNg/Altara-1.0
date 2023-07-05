<?php

namespace App\Http\Requests;


use App\Models\Feedback;
use Illuminate\Foundation\Http\FormRequest;

class FeedbackRequest extends FormRequest
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
                    return Feedback::rules();
                }
            case 'PUT': {
                    return Feedback::updateRules();
                }
            default:
                break;
        }
    }
}
