<?php
namespace App\Repositories;

use App\PaymentGateway;

class PaymentGatewayRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return PaymentGateway::class;
    }

    public function all() {
        return $this->model::latest()->get();
    }

}