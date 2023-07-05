<?php


namespace App\Repositories;


use App\Models\Discount;

class DiscountRepository extends Repository
{
    public function model()
    {
        return Discount::class;
    }
}
