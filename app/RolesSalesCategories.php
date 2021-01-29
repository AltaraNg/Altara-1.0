<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolesSalesCategories extends Model
{
    public function role()
    {
        return $this->hasOne(Role::class);
    }

    public function salesCategory()
    {
        return $this->hasOne(SalesCategory::class);
    }
}
