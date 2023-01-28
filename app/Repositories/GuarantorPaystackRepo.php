<?php

namespace App\Repositories;

use App\GuarantorPaystackAuthCode;
use App\Product;

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
