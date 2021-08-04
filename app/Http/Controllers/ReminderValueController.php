<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Repositories\ReminderValueRepository;
use Illuminate\Http\Request;

class ReminderValueController extends Controller
{

    private $reminderValue;

    public function  __construct(ReminderValueRepository $reminderValueRepository)
    {
        $this->reminderValue = $reminderValueRepository;
    }

    public function index()
    {
        $result = $this->reminderValue->all();
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
