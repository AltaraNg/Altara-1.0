<?php


namespace App\Http\Filters;

use App\Role;
use Maatwebsite\Excel\Row;

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
    public function filterBranch()
    {
        if (auth()->user()->isDSACaptain()){
            $this->builder->where('branch_id', auth()->user()->branch_id);
        }
        else if (auth()->user()->isCoordinator()){
            // Todo: filter for coordinator
        }



    }
}
