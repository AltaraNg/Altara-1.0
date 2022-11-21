<?php

namespace App\Http\Requests;


use App\Todo;
use App\WebsiteProduct;
use Illuminate\Foundation\Http\FormRequest;

class WebsiteProductRequest extends FormRequest
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
                    return WebsiteProduct::rules();
                }
            case 'PUT': {
                    return WebsiteProduct::updateRules($this->website_product->id);
                }
            default:
                break;
        }
    }
}
