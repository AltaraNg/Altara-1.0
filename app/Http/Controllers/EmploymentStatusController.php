<?php

namespace App\Http\Controllers;

use App\EmploymentStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EmploymentStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return $this->sendSuccess(EmploymentStatus::all()->toArray(), 'Employment Statuses retrieved successfully');
    }
}
