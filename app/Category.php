<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
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
            'name' => 'required|unique:categories,name',
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
            'name' => 'sometimes|required|unique:categories,name,' . $id,
            'is_active' => 'sometimes|required|boolean'
        ];
    }


    public function brands()
    {
        return $this->belongsToMany(Brand::class);
    }
}
