<?php


namespace App;
use App\Helper\DataViewer;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    //
    use DataViewer;


    protected $fillable = ['receiver_id','branch_id', 'supplier_id','product_id', 'inventory_sku', 'serial_number', 'market_price', 'sold_date', 'received_date', 'status'];

    public static $columns = ['id', 'inventory sku', 'serial_number', 'market_price', 'branch', 'received by' ];

    public static function form(): iterable
    {


        return [
            'product_id' => '',
            'inventory_sku' => '',
            'receiver_id' => '',
            'market_price' => '',
            'serial_number' => '',
            'branch' => '',


        ];
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function product()
    {
        return $this->hasMany(Product::class);
    }
    public function issues()
    {
        return $this->hasMany(ProductIssue::class);
    }
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
