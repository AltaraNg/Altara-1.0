<?php

namespace App\Http\Requests;

use App\Collection;
use Illuminate\Foundation\Http\FormRequest;

class CollectionRequest extends FormRequest
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
                    'visited' => 'required|boolean',
                        'type' => 'required|in:' . Collection::FIRST_RECOVERY . ',' . Collection::SECOND_RECOVERY . ',' . Collection::THIRD_RECOVERY . ',' . Collection::FIRST_COLLECTION . ',' . Collection::SECOND_COLLECTION . ',' . Collection::THIRD_COLLECTION
                ];
            }
            default:break;
        }
    }
}
