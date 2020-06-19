<?php

namespace App\Http\Controllers;

use App\Amortization;
use App\Helpers\ResponseHelper;
use App\Http\Filters\AmortizationFilter;
use App\NewOrder;
use App\Repositories\AmortizationRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
     */
    public function update(Request $request, Amortization $amortization)
    {
        $data = $this->validate($request, Amortization::$updateRules);
        $resp = $this->amortizationRepository->update($amortization, $data);
        return ResponseHelper::createSuccessResponse($resp->toArray());
    }
}
