<?php


namespace App\Repositories;


use App\Models\CustomRepaymentDate;

class CustomRepaymentDatesRepository extends Repository
{
    public function model()
    {
        return CustomRepaymentDate::class;
    }
}
