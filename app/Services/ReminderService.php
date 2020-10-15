<?php

namespace App\Services;

use App\Repositories\CustomerRepository;
use App\Repositories\AmortizationRepository;
use App\Exceptions\AException;

class ReminderService
{
    private $amortizationRepo;
    private $customerRepo;

    public function __construct(AmortizationRepository  $amortizationRepo, CustomerRepository $customerRepo)
    {
        $this->amortizationRepo = $amortizationRepo;
        $this->customerRepo = $customerRepo;
    }
    public function fetchCustomers($days)
    {
        //get list of customers based on their repayment date


        try {
            $customers = $this->amortizationRepo->getAmortizationByDays($days);
            $customer_array = array();
            foreach ($customers as $customer) {
                $customer_array[] = $this->getCustomer($customer->customer_id);
            }
        } catch (\Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }
        return $customer_array;
    }

    public function getCustomer($id)
    {
        try {
            //code...
            return $this->customerRepo->getCustomer($id);
        } catch (\Exception $e) {
            //throw $th;
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
