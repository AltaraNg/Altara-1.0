<?php

namespace App;

use App\Helper\Helper;
use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use Filterable;
    protected $guarded = [];
    protected $with = ['inventoryStatus', 'transfers'];
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
            'price' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/'
        ];
    }

    public function inventoryStatus(){
        return $this->belongsTo(InventoryStatus::class);
    }

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function updateRules()
    {
        return [
            'inventory_status_id' => 'sometimes|required|exists:inventory_statuses,id',
            'product_id' => 'sometimes|required|exists:products,id',
            'product_name' => 'sometimes|required|exists:products,name',
            'receiver_id' => 'sometimes|required|exists:users,id',
            'branch_id' => 'sometimes|required|exists:branches,id',
            'supplier_id' => 'sometimes|required|exists:suppliers,id',
            'price' => 'sometimes|required|numeric|regex:/^\d+(\.\d{1,2})?$/',
        ];
    }

    public function transfers()
    {
        return $this->hasMany(ProductTransfer::class, 'inventory_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }


    public function setSkuAttribute()
    {
        $this->attributes['inventory_sku'] = self::getInventorySku();
    }

    public static function getInventorySku()
    {
        return 'INV/'.Helper::generatePrefix(config('app.name')) . '/' . Helper::generateSKU(6). '/' . date("Y");
    }

    public function toArray()
    {
        return [
            "id" => $this->id,
            "product_id" => $this->product_id,
            "product_name" => $this->product_name,
            "receiver_id" => $this->receiver_id,
            "branch_id" => $this->branch_id,
            "supplier_id" => $this->supplier_id,
            "inventory_sku" => $this->inventory_sku,
            "price" => $this->product->retail_price,
            "received_date" => $this->received_date,
            "sold_date" => $this->sold_date,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "inventory_status" => $this->inventoryStatus,
            "inventory_status_id" => $this->inventory_status_id,
            "transfers" => $this->transfers,
        ];
    }
}
