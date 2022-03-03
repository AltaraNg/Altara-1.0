<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Http\Requests\PaystackCustomersCodeRequest;
use App\PaystackCustomersCode;
use App\Repositories\CustomerRepository;
use App\Repositories\PaystackCustomersCodeRepository;

class PaystackCustomersCodeController extends Controller
{
    //
    private $payStackCustomerCodeRepo;
    private $customerRepository;

    public function __construct(PaystackCustomersCodeRepository $payStackCustomerCodeRepo, CustomerRepository $customerRepository)
    {
        $this->payStackCustomerCodeRepo = $payStackCustomerCodeRepo;
        $this->customerRepository = $customerRepository;
    }

    public function store(PaystackCustomersCode $model,PaystackCustomersCodeRequest $request)
    {
        $result = $this->payStackCustomerCodeRepo->updateOrCreate($model, $request->consumer_code, $request->validated());
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
