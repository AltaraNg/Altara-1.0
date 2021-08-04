<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Repositories\DownPaymentRateRepository;

class DownPaymentRateController extends Controller
{
    //
    private $downPaymentRate;

    public function __construct(DownPaymentRateRepository $downPaymentRateRepository)
    {
        $this->downPaymentRate = $downPaymentRateRepository;
    }

    public function index()
    {
        $result = $this->downPaymentRate->all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
