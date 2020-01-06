<?php

namespace App;

use App\Helper\DataViewer;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use DataViewer;

    protected $fillable = ['name', 'feature', 'user_id', 'brand_id', 'category_id', 'retail_price',  'availability', 'branch_id'];

    public static $columns = ['id', 'name', 'retail_price in Naira'];

    public static function form(): iterable
    {


        return [
            'name' => 'PID-0001',
            'brand_id' => '',
            'category_id' => '',
            'retail_price' => '',
            'feature' => '',
            'is_active' => false,


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
    public function branch(){
        return $this->belongsTo(Branch::class);
    }

    /*public function adder()
    {
       return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function seller()
    {
       return $this->belongsTo(User::class, 'sold_by', 'id');
    }

    public function receiver()
    {
       return $this->belongsTo(User::class, 'received_by', 'id');
    }

    public function brand()
    {
       return $this->belongsTo(Brand::class);
    }

    public function branch()
    {
       return $this->belongsTo(Branch::class);
    }

    public function category()
    {
       return $this->belongsTo(Category::class);
    }

    public function supplier()
    {
       return $this->belongsTo(Supplier::class);
    }*/

}
