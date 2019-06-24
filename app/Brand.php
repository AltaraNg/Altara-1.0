<?php

namespace App;

use App\Helper\DataViewer;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use DataViewer;

    public $timestamps = false;

    protected $fillable = ['name'];

    public static $columns = ['id', 'name'];

    public static function form() : iterable
    {
        return [
            'name' => ''
        ];
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'brand_category', 'brand_id', 'category_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

}
