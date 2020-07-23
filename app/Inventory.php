<?php

namespace App;

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
            'inventory_sku' => 'required|unique:inventories,inventory_sku|string',
            'product_id' => 'required|exists:products,id',
            'product_name' => 'required|exists:products,name',
            'receiver_id' => 'required|exists:users,id',
            'branch_id' => 'required|exists:branches,id',
            'supplier_id' => 'required|exists:suppliers,id',
            'price' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
            'received_date' => 'required|date',
            'sold_date' => 'required|date',
            'is_active' => 'sometimes|required|boolean'
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



}
