<?php


namespace App\Repositories;


use App\DownPaymentRate;

class DownPaymentRateRepository extends Repository
{
    public function model()
    {
        return DownPaymentRate::class;
    }

    public function getAll()
    {
        return $this->model::orderBy('created_at', 'desc')->paginate();
    }
}
