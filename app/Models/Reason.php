<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reason extends Model
{
    //
    protected $guarded = [];

    public function feedback()
    {
        return $this->hasMany(Feedback::class);
    }
}
