<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use Illuminate\Http\Request;
use App\Http\Requests\PaystackAuthCodeRequest;
use App\PaystackAuthCode;
use App\Repositories\PaystackAuthCodeRepository;

class PaystackAuthCodeController extends Controller
{
    //
    private $paystackAuthCode;

    public function __construct(PaystackAuthCodeRepository $paystackAuthCodeRepo)
    {
        $this->paystackAuthCode = $paystackAuthCodeRepo;
    }

    public function store(PaystackAuthCodeRequest $request)
    {
        $result = $this->paystackAuthCode->store($request->validated());
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
