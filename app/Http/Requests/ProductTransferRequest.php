<?php

namespace App\Http\Requests;

use App\Models\ProductTransfer;
use Illuminate\Foundation\Http\FormRequest;

class ProductTransferRequest extends FormRequest
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
                return ProductTransfer::rules();
            }
            case 'PUT': {
                return ProductTransfer::updateRules();
            }
            default:break;
        }
    }
}
