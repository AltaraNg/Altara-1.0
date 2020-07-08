<?php

namespace App\Http\Requests;

use App\Branch;

use App\Supplier;
use Illuminate\Foundation\Http\FormRequest;

class SupplierRequest extends FormRequest
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
                return Supplier::rules();
            }
            case 'PUT': {
                return Supplier::updateRules($this->supplier->id);
            }
            default:break;
        }
    }

    public function show(Supplier $supplier)
    {
        return $this->sendSuccess($supplier->toArray(), 'Supplier retrieved successfully');
    }

}
