<?php


namespace App\Repositories;


use App\Models\AltaraPayDdData;

class DirectDebitDataRepository extends Repository
{
    public function model()
    {
        return AltaraPayDdData::class;
    }
}
