<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public $timestamps = false;
    protected $with = ['users'];

    const DSA = 'Direct Sales Agent';
    const DSA_REFERRAL = 'Direct Sales Agent - Referral';
    const DSA_RENEWAL = 'Direct Sales Agent - Renewal';
    const DSA_CAPTAIN = 'Direct Sales Agent Captain';
    const FREELANCE_CAPTAIN = 'Freelance Captain';
    const COORDINATOR = 'Coordinator';
    const CLA = 'Cash Loan agents';







    //a role can be assigned to many user/employee : role->users
    public function users()
    {
        return $this->hasMany(User::class)->where('portal_access', 1);
    }

    public function salesCategories()
    {
        return $this->belongsToMany(SalesCategory::class, 'roles_sales_categories', 'role_id', 'sales_category_id');
    }
}
