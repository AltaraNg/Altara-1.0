<?php

namespace App\Repositories;

use App\Branch;

class BranchRepository extends Repository
{
    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Branch::class;
    }

    public function all()
    {
        return $this->model::all();
    }

    public function getBranches($columns = ["*"])
    {
        return $this->model::get($columns);
    }
}
