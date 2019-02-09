<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
   /** timestamp is not needed in the states table in the database*/
    public $timestamps = false;

    /**a state can contain many branches ; state->branches*/
    public function branches()
    {
        return $this->hasMany(Branch::class);
    }
}
