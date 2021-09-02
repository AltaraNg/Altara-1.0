<?php


namespace App\Repositories;


use App\BusinessType;

class BusinessTypeRepository extends Repository
{
    public function model()
    {
        return BusinessType::class;
    }
    /** 
     * @var string $businessTypeName "pay" || "cash"
     * 
     **/
    public function getBusinessTypesId(string $businessTypeName = 'pay')
    {
        //please do not remove the space
        $businessTypeNameInitial = 'Altara ' . ucfirst($businessTypeName);
        //Replacing multiple spaces with a single space
        $businessTypeNameInitial = preg_replace('!\s+!', ' ', $businessTypeNameInitial);
        return  $this->model::where('name', 'like', "%$businessTypeNameInitial%")->get();
    }
}
