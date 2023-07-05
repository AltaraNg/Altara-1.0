<?php

namespace App\Repositories;

use App\Models\GuarantorPaystackAuthCode;

class GuarantorPaystackRepo extends Repository
{
    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return GuarantorPaystackAuthCode::class;
    }



}
