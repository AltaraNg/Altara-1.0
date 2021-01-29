<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesCategory extends Model
{
    public $timestamps = false;

    protected $guarded = [];
    const GROUP_REFERRAL = 'group_referral';
    const STAFF_PROGRAM = 'staff_program';

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'roles_sales_categories', 'sales_category_id', 'role_id');
    }

    public function orders()
    {
        return $this->hasMany(NewOrder::class);
    }
}
