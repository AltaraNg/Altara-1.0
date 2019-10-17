<?php


namespace App;
use App\Helper\DataViewer;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    //
    use DataViewer;

    protected $fillable = ['seller_id', 'receiver_id', 'product_id', 'inventory_sku', 'serial_number', 'market_price', 'sold_date', 'received_date', 'status'];

    public static $columns = ['id', 'name', 'retail_price in Naira'];

    public static function form(): iterable
    {


        return [
            'product_id' => '',
            'inventory_sku' => '',
            'receiver_id' => '',
            'seller_id' => '',
            'serial_number' => '',
            'status' => '',
            'issues_id' => ''

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
