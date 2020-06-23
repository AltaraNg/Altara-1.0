<?php


namespace App\Repositories;


use App\BusinessType;

class BusinessTypeRepository extends Repository
{
    public function model()
    {
        return BusinessType::class;
    }

    public function getAll()
    {
        return $this->model::orderBy('created_at', 'desc')->paginate();
    }
}
