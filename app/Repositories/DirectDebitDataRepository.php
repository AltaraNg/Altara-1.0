<?php


namespace App\Repositories;


use App\AltaraPayDdData;

class DirectDebitDataRepository extends Repository
{
    public function model()
    {
        return AltaraPayDdData::class;
    }
}
