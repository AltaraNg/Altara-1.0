<?php

namespace App\Repositories;

use App\Models\ClientCustomerCollection;

class ClientCustomerCollectionRepository extends Repository
{
    public function model()
    {
        return ClientCustomerCollection::class;
    }
    public function queryModel($filter)
    {
        return $this->model::filter($filter);
    }
}
