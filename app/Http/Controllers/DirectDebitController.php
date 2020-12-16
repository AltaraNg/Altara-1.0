<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;

use App\Http\Requests\DirectDebitRequest;
use App\DirectDebit;
use App\Repositories\DirectDebitRepository;

class DirectDebitController extends Controller
{
    //
    private $directDebit;

    public function __construct(DirectDebitRepository $directDebitRepo)
    {
        $this->directDebit = $directDebitRepo;
    }

    public function store(DirectDebitRequest $request)
    {
        $result = $this->directDebit->store($request->validated());
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
