<?php


namespace App\Repositories;


use App\RepaymentCycle;

class RepaymentCycleRepository extends Repository
{
    public function model()
    {
        return RepaymentCycle::class;
    }

    public function getAll()
    {
        return $this->model::orderBy('created_at', 'desc')->paginate();
    }
}
