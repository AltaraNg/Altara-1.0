<?php

namespace App\Repositories;

use App\Models\PaystackCustomersCode;

class PaystackCustomersCodeRepository extends Repository
{
    public function model()
    {
        return PaystackCustomersCode::class;
    }

    public function store(array $data)
    {
        // dd($data);
        $result = $this->model::create($data);


        return $result;
    }
    public function getByID($id)
    {
        return $this->model()::find($id);
    }
}
