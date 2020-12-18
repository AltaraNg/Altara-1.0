<?php


namespace App\Repositories;

use App\Amortization;
use App\Amortization\Amortization as AmortizationAmortization;

class AmortizationRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Amortization::class;
    }

    public function getAll($filter)
    {
        return $this->model::orderBy('created_at', 'desc')->filter($filter)->paginate();
    }


}
