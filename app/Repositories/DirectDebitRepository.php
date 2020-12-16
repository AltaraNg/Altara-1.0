<?php

namespace App\Repositories;

use App\DirectDebitResult;

class DirectDebitResultRepository extends Repository
{
    public function model()
    {
        return DirectDebitResult::class;
    }

    public function store(array $data)
    {
        return $this->model::create($data);
    }
}
