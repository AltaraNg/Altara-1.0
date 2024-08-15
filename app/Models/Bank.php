<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
//    public $timestamps = false;
    protected $guarded = [];
    protected $primaryKey = 'id';
    public function branches()
    {
        return $this->hasMany(Branch::class);
    }
}
