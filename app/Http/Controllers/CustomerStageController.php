<?php

namespace App\Http\Controllers;

use App\CustomerStage;
use Illuminate\Http\Response;

class CustomerStageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return $this->sendSuccess(CustomerStage::all()->toArray(), 'Stages retrieved successfully');
    }
}
