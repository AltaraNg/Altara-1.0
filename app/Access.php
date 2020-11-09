<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Access extends Model
{
    const SUPER_ADMIN = 'Super_Admin';
    const ADMIN = 'Admin';
    const USER = 'User';


    public function users()
    {
        return $this->belongsToMany(Access::class, 'user_accesses');
    }
}
