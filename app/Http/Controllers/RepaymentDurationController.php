<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Repositories\RepaymentDurationRepository;
use Illuminate\Http\Request;

class RepaymentDurationController extends Controller
{
    //
    private $repaymentDuration;

    public function __construct(RepaymentDurationRepository $repaymentDurationRepository)
    {
        $this->repaymentDuration = $repaymentDurationRepository;
    }

    public function index()
    {
        $result = $this->repaymentDuration->all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
