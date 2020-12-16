<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use Illuminate\Http\Request;
use App\Http\Requests\PaystackCustomersCodeRequest;
use App\PaystackAuthCode;
use App\Repositories\PaystackCustomersCodeRepository;

class PaystackCustomersCodeController extends Controller
{
    //
    private $paystackCustomerCode;

    public function __construct(PaystackCustomersCodeRepository $paystackCustomersCodeRepo)
    {
        $this->paystackCustomerCode = $paystackCustomersCodeRepo;
    }

    public function store(PaystackCustomersCodeRequest $request)
    {
        $result = $this->paystackCustomerCode->store($request->validated());
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
