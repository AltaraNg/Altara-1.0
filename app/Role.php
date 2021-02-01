<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public $timestamps = false;
    protected $with = ['users:id,full_name'];

    //a role can be assigned to many user/employee : role->users
    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function salesCategories()
    {
        return $this->belongsToMany(SalesCategory::class, 'roles_sales_categories', 'role_id', 'sales_category_id');
    }
}
