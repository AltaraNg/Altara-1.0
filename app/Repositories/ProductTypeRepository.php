<?php


namespace App\Repositories;


use App\Models\ProductType;

class ProductTypeRepository extends Repository
{
    public function model()
    {
        return ProductType::class;
    }
}
