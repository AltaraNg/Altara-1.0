<?php


namespace App\Repositories;



use App\Models\Supplier;

class SupplierRepository extends Repository
{


    public function model()
    {
        return Supplier::class;
    }
}
