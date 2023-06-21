<?php


namespace App\Http\Requests;


use App\Models\ContactCustomer;
use Illuminate\Foundation\Http\FormRequest;

class ContactCustomerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        switch ($this->method()) {
            case 'POST': {
                return ContactCustomer::rules();
            }
            case 'PUT': {
                return ContactCustomer::updateRules($this->customer_contact->id);
            }
            default:break;
        }
    }
}
