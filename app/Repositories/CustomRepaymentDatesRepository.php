<?php


namespace App\Repositories;


use App\CustomRepaymentDate;

class CustomRepaymentDatesRepository extends Repository
{
    public function model()
    {
        return CustomRepaymentDate::class;
    }
}
