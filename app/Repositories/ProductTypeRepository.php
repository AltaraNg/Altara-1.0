<?php


namespace App\Repositories;


use App\ProductType;

class ProductTypeRepository extends Repository
{
    public function model()
    {
        return ProductType::class;
    }

    public function getAll()
    {
        return $this->model::orderBy('created_at', 'desc')->paginate();
    }
}
