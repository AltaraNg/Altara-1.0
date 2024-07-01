<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BnplVendorProduct extends Model
{
    protected $guarded = [];
    //
    public function vendor(){
        return $this->belongsTo(User::class, 'vendor_id');
    }

    public function toArray()
    {
        return [
            "name" => $this->name,
            "price" => $this->price,
            "vendor_id" => $this->vendor_id,
            "vendor" => $this->vendor,
            "status" => $this->status,
            "created_at" => $this->created_at
        ];
    }
}
