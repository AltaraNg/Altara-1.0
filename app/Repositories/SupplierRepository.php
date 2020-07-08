<?php


namespace App\Repositories;


use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;
use App\Supplier;

class SupplierRepository extends Repository
{
    use OrderObject, ExtractRequestObject;

    public function model()
    {
        return Supplier::class;
    }
}
