<?php


namespace App\Http\Requests;


use App\Inventory;
use Illuminate\Foundation\Http\FormRequest;

class InventoryRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        switch ($this->method()) {
            case 'POST': {
                return Inventory::rules();
            }
            case 'PUT': {
                return Inventory::updateRules();
            }
            default:
                return [''];
        }
    }
}
