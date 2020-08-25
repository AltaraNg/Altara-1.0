<?php


namespace App\Http\Filters;


class SupplierFilter extends BaseFilter
{
    public function phoneNumber(string $phone_number){
        $this->builder->where('phone_number', 'like', '%' . $phone_number .'%');
    }
}
