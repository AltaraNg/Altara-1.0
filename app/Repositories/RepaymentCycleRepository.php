<?php


namespace App\Repositories;


use App\RepaymentCycle;

class RepaymentCycleRepository extends Repository
{
    public function model()
    {
        return RepaymentCycle::class;
    }
}
