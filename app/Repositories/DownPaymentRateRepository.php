<?php


namespace App\Repositories;


use App\Models\DownPaymentRate;

class DownPaymentRateRepository extends Repository
{
    public function model()
    {
        return DownPaymentRate::class;
    }
}
