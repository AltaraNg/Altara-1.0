<?php

namespace App\Http\Requests;

use App\Models\RenewalPrompterStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'promised_date' => [Rule::requiredIf(function () {
                //this checks if the supplied renewal_prompter_status_id supplied is same as renewal prompter status id of the name intrested on the renewal prompters status table
                return  request()->renewal_prompter_status_id == RenewalPrompterStatus::where('name', 'like', '%interested%')->first()->id ?? '';
            }), 'date', 'after_or_equal:now', 'date_format:Y-m-d'],
        ];
    }
}
