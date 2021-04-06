<?php


namespace App\Http\Filters;


class UserFilter extends BaseFilter
{
    public function role(int $role_id)
    {
        $this->builder->where('role_id', $role_id);
    }
    public function branch(int $branch_id)
    {
        $this->builder->where('branch_id', $branch_id);
    }
}
