<?php


namespace App\Repositories;



use App\SalesCategory;

class SalesCategoryRepository extends Repository
{

    public function model()
    {
        return SalesCategory::class;
    }

    public function fetchRoles($model)
    {
        return $model->roles->toArray();
    }


}
