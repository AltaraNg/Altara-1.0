<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
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
        $result = $this->customRepaymentDate->getAll();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
