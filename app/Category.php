<?php

namespace App;

use App\Helper\DataViewer;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use DataViewer;

    public $timestamps = false;

    protected $fillable = ['name', 'is_available'];

    public static $columns = ['id', 'name', 'availability'];

    public static function form() : iterable
    {
        return [
            'name' => '',
            'is_available' => true
        ];
    }

    public function brands()
    {
        return $this->belongsToMany(Brand::class, 'brand_category', 'category_id', 'brand_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    /*public function suppliers()
    {
        return $this->hasMany(Supplier::class);
    }*/

    /*public function suppliers()
      {
          return $this->belongsToMany(Supplier::class, 'supplier_category', 'category_id', 'supplier_id');
      }*/
}
