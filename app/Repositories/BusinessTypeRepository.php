<?php


namespace App\Repositories;


use App\BusinessType;

class BusinessTypeRepository extends Repository
{
    public function model()
    {
        return BusinessType::class;
    }
}
