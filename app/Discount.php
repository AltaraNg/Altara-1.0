<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    public $timestamps = false;

    protected $fillable = ['name','percentage'];
}
