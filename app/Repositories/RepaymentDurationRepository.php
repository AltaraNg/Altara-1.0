<?php


namespace App\Repositories;


use App\RepaymentDuration;

class RepaymentDurationRepository extends Repository
{
    public function model()
    {
        return RepaymentDuration::class;
    }

    public function getAll()
    {
        return $this->model::orderBy('created_at', 'desc')->paginate();
    }
}
