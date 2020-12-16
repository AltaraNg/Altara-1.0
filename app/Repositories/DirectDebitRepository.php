<?php

namespace App\Repositories;

use App\DirectDebit;

class DirectDebitRepository extends Repository
{
    public function model()
    {
        return DirectDebit::class;
    }

    public function store(array $data)
    {
        // dd($data);
        $result = $this->model::create($data);


        return $result;
    }
}
