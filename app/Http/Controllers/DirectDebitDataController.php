<?php


namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Http\Requests\DirectDebitDataRequest;
use App\Repositories\DirectDebitDataRepository;

class DirectDebitDataController
{
    private $directDebitDataRepo;

    public function __construct(DirectDebitDataRepository $dataRepository)
    {
        $this->directDebitDataRepo = $dataRepository;
    }

    public function store(DirectDebitDataRequest $request)
    {
        $result = $this->directDebitDataRepo->store($request->validated());
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}
