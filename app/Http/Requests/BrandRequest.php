<?php

namespace App\Http\Requests;

use App\Brand;
use Illuminate\Foundation\Http\FormRequest;

class BrandRequest extends FormRequest
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
                return Brand::rules();
            }
            case 'PUT': {
                return Brand::updateRules($this->brand->id);
            }
            case 'PATCH': {
                return Brand::catRules();
            }
            default:break;
        }
    }
}
