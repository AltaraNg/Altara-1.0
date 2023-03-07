<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NewDocument extends Model
{
    //
    use SoftDeletes;

    public function documentable(){
        return $this->morphTo();
    }
}
