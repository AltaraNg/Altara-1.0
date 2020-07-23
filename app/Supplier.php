<?php

namespace App;


use App\Helper\Helper;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    protected $guarded = [];

    /**
     * @return array
     */
    public static function rules()
    {
        return [
            'name' => 'required|unique:suppliers,name',
            'address' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'phone_number' => 'required|string|unique:suppliers,phone_number',
            'email' => 'required|string|unique:suppliers,email',
            'contact_person_name' => 'required|string',
            'bank_account_name' => 'required|string',
            'bank_account_no' => 'required|string',
            'is_active' => 'sometimes|required|boolean'
        ];
    }

    public static function updateRules($id)
    {
        return [
            'name' => 'sometimes|required|string|exists:suppliers,name'.$id,
            'address' => 'sometimes|required|string',
            'city' => 'sometimes|required|string',
            'state' => 'sometimes|required|string',
            'phone_number' => 'sometimes|required|exists|string',
            'email' => 'sometimes|required|string',
            'contact_person_name' => 'sometimes|required|string',
            'bank_account_name' => 'sometimes|required|string',
            'bank_account_no' => 'sometimes|required|string',
            'is_active' => 'sometimes|required|boolean'
        ];
    }

    /**
     * Set the Suppliers SKU.
     *
     * @param string $value
     * @return void
     * @throws \Exception
     */
    public function setSkuAttribute()
    {
        $this->attributes['sku'] = $this->getSupplierSku($this->name);
    }

    private function getSupplierSku($name)
    {
        return Helper::generatePrefix(config('app.name')) . '/' . Helper::generateSKU(4) . '/' . Helper::generatePrefix($name) . '/' . date("Y");
    }

}
