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

    public static function rules()
    {
        return [
            'name' => 'required|unique:sales_categories,name',
        ];
    }

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function updateRules($id)
    {
        return [
            'name' => 'sometimes|required|unique:sales_categories,name,' . $id,
        ];
    }

    public static function roleRules()
    {
        return [
            'roles' => 'required|array',
            'roles.*' => 'required|numeric|exists:roles,id'
        ];
    }
}
