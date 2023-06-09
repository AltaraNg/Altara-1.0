<?php
namespace App\Repositories;

use App\Models\OrderType;

class OrderTypeRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return OrderType::class;
    }

    public function all() {
        return $this->model::latest()->get();
    }

}
