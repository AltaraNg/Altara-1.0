<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;

use App\Http\Requests\DirectDebitResultRequest;
use App\Repositories\DirectDebitResultRepository;

class DirectDebitResultController extends Controller
{
    private $directDebitResultRepo;

    public function __construct(DirectDebitResultRepository $directDebitResultRepository)
    {
        $this->directDebitResultRepo = $directDebitResultRepository;
    }

    public function store(DirectDebitResultRequest $request)
    {
        $result = $this->directDebitResultRepo->store($request->validated());
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
