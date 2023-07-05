<?php

namespace App\Http\Controllers;

use App\Models\EmploymentStatus;
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
