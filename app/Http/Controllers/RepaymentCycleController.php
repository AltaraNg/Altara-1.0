<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Repositories\RepaymentCycleRepository;
use Illuminate\Http\Request;

class RepaymentCycleController extends Controller
{
    //
    private $repaymentCycle;

    public function __construct(RepaymentCycleRepository $repaymentCycleRepository)
    {
        $this->repaymentCycle = $repaymentCycleRepository;
    }

    public function index()
    {
        $result = $this->repaymentCycle->all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
