<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Repositories\CustomRepaymentDatesRepository;
use Illuminate\Http\Request;

class CustomRepaymentDateController extends Controller
{
    //
    private $customRepaymentDate;

    public function __construct(CustomRepaymentDatesRepository $customRepaymentDatesRepository)
    {
        $this->customRepaymentDate = $customRepaymentDatesRepository;
    }

    public function index()
    {
        $result = $this->customRepaymentDate->all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
