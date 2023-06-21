<?php


namespace App\Repositories;


use App\Models\RepaymentCycle;

class RepaymentCycleRepository extends Repository
{
    public function model()
    {
        return RepaymentCycle::class;
    }
}
