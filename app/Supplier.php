<?php

namespace App;

use App\Helper\DataViewer;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use DataViewer;

    public static $columns = ['id', 'sku', 'name', 'phone_number', 'email', 'contact_person_name', 'status', 'date_of_reg'];

    protected $fillable = [
        'user_id',
        'sku',
        'name',
        'address',
        'phone_number',
        'email',
        'date_of_reg',
        'status',
        'contact_person_name',
        'bank_account_name',
        'bank_account_no',
        'bank_name',
    ];

    public static function form() : iterable
    {
        return [
            'sku' => "ALTS/001/POL/18",
            'name' => '',
            'date_of_reg' => date('Y-m-d'),
            'status' => 1,
            'address' => '',
            'phone_number' => '',
            'contact_person_name' => '',
            'bank_name' => '',
            'bank_account_no' => '',
            'bank_account_name' => '',
            'email' => '',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
//      return $this->hasMany(Product::class, 'supplier_id', 'id');
    }

    /*public function category()
    {
       return $this->belongsTo(Category::class);
    }*/

    public function categories()
    {
//        return $this->belongsToMany(Category::class, 'supplier_category', 'supplier_id', 'category_id');
    }

}
