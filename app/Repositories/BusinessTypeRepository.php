<?php


namespace App\Repositories;


use App\BusinessType;

class BusinessTypeRepository extends Repository
{
    public function model()
    {
        return BusinessType::class;
    }
    public function getBusinessTypesId($businessTypeName = "Altara Pay")
    {
      return  $this->model::where('name', 'like', "%$businessTypeName%")->get();
    }
}
