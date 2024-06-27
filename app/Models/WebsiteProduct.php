<?php

namespace App\Models;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class WebsiteProduct extends Model
{
    //
    use Filterable;
    protected $guarded = [];
    public static function rules()
    {
        return [
            'name' => 'required|unique:website_products,name',
            'price' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
            'description' => 'required|string',
            'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }

    public static function updateRules($id)
    {
        return [
            'name' => 'sometimes|required',
            'price' => 'sometimes|required|numeric|regex:/^\d+(\.\d{1,2})?$/',
            'description' => 'sometimes|required|string',
            'image' => 'sometimes|required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'sometimes|required|string'
        ];
    }

}
