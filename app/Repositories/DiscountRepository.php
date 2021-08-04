<?php


namespace App\Repositories;


use App\Discount;

class DiscountRepository extends Repository
{
    public function model()
    {
        return Discount::class;
    }
}
