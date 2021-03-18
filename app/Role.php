<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public $timestamps = false;
    protected $with = ['activeUsers'];

    //a role can be assigned to many user/employee : role->users
    public function users()
    {
        return $this->hasMany(User::class, 'role_id', 'id');
    }

    public function activeUsers()
    {
        return $this->hasMany(User::class, 'role_id', 'id')->where('portal_access', 1);

    }

    public function salesCategories()
    {
        return $this->belongsToMany(SalesCategory::class, 'roles_sales_categories', 'role_id', 'sales_category_id');
    }
}
