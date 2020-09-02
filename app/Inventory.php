<?php

namespace App;

use App\Helper\Helper;
use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use Filterable;
    protected $guarded = [];
    /**
     * Validation rules
     *
     * @return array
     * @var array
     */

    public static function rules()
    {
        return [
            'product_id' => 'required|exists:products,id',
            'receiver_id' => 'required|exists:users,id',
            'branch_id' => 'required|exists:branches,id',
            'supplier_id' => 'required|exists:suppliers,id',
            'price' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
            'is_active' => 'sometimes|required|boolean',
            'product_name' => 'required|exists:products,name',
        ];
    }

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function updateRules($id)
    {
        return [
            'is_active' => 'sometimes|required|boolean',
            'product_id' => 'sometimes|required|exists:products,id',
            'product_name' => 'sometimes|required|exists:products,name',
            'receiver_id' => 'sometimes|required|exists:users,id',
            'branch_id' => 'sometimes|required|exists:branches,id',
            'supplier_id' => 'sometimes|required|exists:suppliers,id',
            'price' => 'sometimes|required|numeric|regex:/^\d+(\.\d{1,2})?$/',
        ];
    }

    public function setSkuAttribute()
    {
        $this->attributes['sku'] = $this->getInventorySku();
    }

    private function getInventorySku()
    {
        return 'INV/'.Helper::generatePrefix(config('app.name')) . '/' . Helper::generateSKU(6). '/' . date("Y");
    }




}
