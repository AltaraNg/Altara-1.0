<?php

namespace App\Repositories;

use App\Models\OrderRequest;

class OrderRequestRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return OrderRequest::class;
    }
}
