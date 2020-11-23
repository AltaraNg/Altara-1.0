<?php

namespace App\Http\Controllers;

use App\Amortization;
use App\Exceptions\AException;
use App\Helpers\ResponseHelper;
use App\Http\Filters\AmortizationFilter;
use App\Http\Requests\NewOrderRequest;
use App\Repositories\AmortizationRepository;
use App\Services\AmmortizationService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class AmortizationController extends Controller
{
    private $amortizationRepository;

    public function __construct(AmortizationRepository $amortizationRepository)
    {
        $this->amortizationRepository = $amortizationRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param AmortizationFilter $filter
     * @return Response
     */
    public function index(AmortizationFilter $filter)
    {
        $result = $this->amortizationRepository->getAll($filter);
        return ResponseHelper::createSuccessResponse($result->toArray());
    }

    /**
     * Display the specified resource.
     *
     * @param Amortization $amortization
     * @return Response
     */
    public function show(Amortization $amortization)
    {
        return ResponseHelper::createSuccessResponse($amortization->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Amortization $amortization
     * @return Response
     * @throws ValidationException
     */
    public function update(Request $request, Amortization $amortization)
    {
        $data = $this->validate($request, Amortization::$updateRules);
        $resp = $this->amortizationRepository->update($amortization, $data);
        return ResponseHelper::createSuccessResponse($resp->toArray());
    }

    /**
     * Display the specified resource.
     *
     * @param NewOrderRequest $request
     * @param AmmortizationService $service
     * @return Response
     * @throws AException
     */
    public function preview(NewOrderRequest $request, AmmortizationService $service)
    {
        $resp = $service->generatePreview($request->validated());
        return ResponseHelper::createSuccessResponse($resp);
    }
}
