<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $table = 'branches';

    //a branch is inside one state : branch->state
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    //a branch has many users : branch->users
    public function users()
    {
        return $this->hasMany(User::class);
    }

    //a branch has many customers : branch->customers
    public function customers()
    {
        return $this->hasMany(Customer::class);
    }
}
