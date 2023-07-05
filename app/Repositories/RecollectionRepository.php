<?php

namespace App\Repositories;

use App\Models\Recollection;

class RecollectionRepository extends Repository
{
    public function model()
    {
        return Recollection::class;
    }
    public function reportQuery($filter)
    {
        return $this->model::filter($filter);
    }

    public function sumOfExpectedPayment(): float {
        return $this->model::sum('expected_amount');
    }
}
