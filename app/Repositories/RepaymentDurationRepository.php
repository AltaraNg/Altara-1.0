<?php


namespace App\Repositories;


use App\RepaymentDuration;

class RepaymentDurationRepository extends Repository
{
    public function model()
    {
        return RepaymentDuration::class;
    }
}
