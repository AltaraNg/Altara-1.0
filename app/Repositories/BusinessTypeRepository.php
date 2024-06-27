<?php


namespace App\Repositories;


use App\Models\BusinessType;

class BusinessTypeRepository extends Repository
{
    public function model()
    {
        return BusinessType::class;
    }
    /**
     * @var string $businessTypeName "pay" || "cash"
     * This methods accepts "cash" or "pay", pay is the default string
     * @return array of type illuminate collection
     * Use this method if you need to get all business type that has name "Altara Pay" or "Altara Type"
     **/
    public function getBusinessTypes(string $businessTypeName = 'pay')
    {
        //please do not remove the space
        $businessTypeNameInitial = 'Altara ' . ucfirst($businessTypeName);
        //Replacing multiple spaces with a single space
        $businessTypeNameInitial = preg_replace('!\s+!', ' ', $businessTypeNameInitial);
        return  $this->model::where('name', 'like', "%$businessTypeNameInitial%")->get();
    }
}
