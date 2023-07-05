<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesType extends Model
{
    public $timestamps = false;

    protected $fillable = ['name', 'percentage_discount'];
}
