<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{

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
            'name' => 'required|unique:brands,name',
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
            'is_active' => 'sometimes|required|boolean'
        ];
    }

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function catRules()
    {
        return [
            'categories' => 'required|array',
            'categories.*' => 'required|numeric|exists:categories,id'
        ];
    }


    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    protected $with = ['categories'];

}
