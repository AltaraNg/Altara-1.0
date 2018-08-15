<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    /*branch state relationship*/
    public function branches(){

        return $this->hasMany(Branch::class);

    }
}
