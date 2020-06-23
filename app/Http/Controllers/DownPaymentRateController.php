<?php

namespace App\Http\Controllers;

use App\DownPaymentRate;
use App\Helpers\ResponseHelper;
use App\Repositories\DownPaymentRateRepository;
use Illuminate\Http\Request;

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
        $result = $this->downPaymentRate->getAll();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
