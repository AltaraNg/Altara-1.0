<?php


namespace App\Http\Filters;

use App\Role;
use Maatwebsite\Excel\Row;

class UserFilter extends BaseFilter
{
    public function role(int $role_id)
    {
        if(Role::find($role_id)->name == 'Direct Sales Agent'){
            $this->builder->whereIn('role_id', [18, 44, 45]);
        }
        else{
            $this->builder->where('role_id', $role_id);
        }

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
            $branches = auth()->user()->branches;
            $ids = $branches->map(function ($branch) {
                return $branch->id;
            });
            $this->builder->whereIn('branch_id', $ids);
        }



    }
}
