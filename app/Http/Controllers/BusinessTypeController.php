<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Repositories\BusinessTypeRepository;
use Illuminate\Http\Request;

class BusinessTypeController extends Controller
{
    //
    private $businessType;

    public function __construct(BusinessTypeRepository $businessTypeRepository)
    {
        $this->businessType = $businessTypeRepository;
    }

    public function index()
    {
        $result = $this->businessType->all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
