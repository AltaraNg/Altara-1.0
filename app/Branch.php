<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $table = 'branch';

    /*branch state relationship*/
    public function state(){

        return $this->belongsTo(State::class);

    }

    /*user branch relationship*/
    public function users()
    {
        return $this->hasMany(User::class);
    }

}
