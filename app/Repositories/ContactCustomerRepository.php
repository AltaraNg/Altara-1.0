<?php


namespace App\Repositories;


use App\ContactCustomer;

class ContactCustomerRepository extends Repository
{

    public function model()
    {
        return ContactCustomer::class;
    }
}
