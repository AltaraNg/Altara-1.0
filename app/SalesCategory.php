<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesCategory extends Model
{
    public $timestamps = false;

    protected $fillable = ['name'];
}
