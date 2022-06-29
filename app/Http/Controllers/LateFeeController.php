<?php

namespace App\Http\Controllers;

use App\Http\Filters\LateFeeFilter;
use App\Repositories\LateFeeRepository;
use Illuminate\Http\Request;

class LateFeeController extends Controller
{
    //
    private $lateFeeRepo;
    public function __construct(LateFeeRepository $lateFeeRepository){
        $this->lateFeeRepo = $lateFeeRepository;
    }

    public function index(LateFeeFilter $filter)
    {
        $lateFees = $this->lateFeeRepo->getAll($filter);

        return $this->sendSuccess($lateFees->toArray(), 'Late fees retrieved successfully');
    }
}
