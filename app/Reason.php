<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reason extends Model
{
    //
    protected $guarded = [];

    public function feedback()
    {
        return $this->belongsToMany(Feedback::class, 'feed_backs');
    }
}
