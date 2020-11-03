<?php

namespace App\Http\Requests;

use App\Helper\Constants;
use Illuminate\Foundation\Http\FormRequest;

class PaymentReminderRequest extends FormRequest
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
                return [
                    'feedback' => 'required',
                    'order_id' => 'required|exists:new_orders,id',
                    'status' => 'required|in:' . Constants::PENDING . ',' . Constants::UNREACHABLE . ',' . Constants::CALLED,
                    'type' => 'required|in:' . Constants::FIRST_CALL . ',' . Constants::SECOND_CALL . ',' . Constants::THIRD_CALL
                ];
            }
            default:break;
        }
    }
}
