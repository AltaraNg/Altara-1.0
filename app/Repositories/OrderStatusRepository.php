<?php

namespace App\Repositories;

use App\Models\OrderStatus;

class OrderStatusRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return OrderStatus::class;
    }
}
