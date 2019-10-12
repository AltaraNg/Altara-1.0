<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductIssue extends Model
{
    //
    protected $fillable = ['name'];

    public static function form():iterable
    {
        return [
            'name' => ''
        ]     ;
    }

    public function inventory()
    {
        return $this->belongsTo(Inventory::class);
    }
}
