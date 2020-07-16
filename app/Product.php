<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
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
            'name' => 'required|unique:products,name',
            'brand_id' => 'required|exists:brands,id',
            'category_id' => 'required|exists:categories,id',
            'retail_price' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
            'feature' => 'required|string|min:2',
            'product_type_id' => 'required|exists:product_types,id',
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
            'name' => 'sometimes|required|unique:brands,name,' . $id,
            'brand_id' => 'sometimes|required|exists:brands,id',
            'category_id' => 'sometimes|required|exists:categories,id',
            'retail_price' => 'sometimes|required|numeric|regex:/^\d+(\.\d{1,2})?$/',
            'feature' => 'sometimes|required|string|min:2',
            'product_type_id' => 'sometimes|required|exists:product_types,id',
            'is_active' => 'sometimes|required|boolean'
        ];
    }

    public function brand()
    {
       return $this->belongsTo(Brand::class);
    }

    public function category()
    {
       return $this->belongsTo(Category::class);
    }

    public function productTransfer()
    {
       return $this->hasMany(ProductType::class);
    }
}
