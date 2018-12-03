<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    public $timestamps = false;

    //a state can contain many branches ; state->branches
    public function branches()
    {
        return $this->hasMany(Branch::class);
    }
}
