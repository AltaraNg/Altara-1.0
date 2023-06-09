<?php

namespace App\Repositories;

use App\Models\PaystackAuthCode;

class PaystackAuthCodeRepository extends Repository
{
    public function model()
    {
        return PaystackAuthCode::class;
    }

    public function store(array $data)
    {
        $result = $this->model::create($data);
        return $result;
    }
}
