<?php

namespace App\Repositories;


use App\Customer;

class CustomerRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Customer::class;
    }

    public function getAll($filter)
    {
        return $this->model::orderBy('created_at', 'desc')->filter($filter)->paginate();
    }

    public function getCustomer($id)
    {
        return $this->model()::find($id);
    }
}
