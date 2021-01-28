<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesCategory extends Model
{
    public $timestamps = false;

    protected $fillable = ['name'];

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'roles_sales_categories', 'sales_category_id', 'role_id');
    }

    public function orders()
    {
        return $this->hasMany(NewOrder::class);
    }
}
