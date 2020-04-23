<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\PaymentType;
use Illuminate\Http\Response;

class PaymentTypeController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $result = PaymentType::all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
