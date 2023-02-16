<?php

namespace App\Http\Controllers;

use App\Amortization;
use App\DownPaymentRate;
use App\Exceptions\AException;
use App\Helper\ResponseHelper;
use App\Http\Filters\AmortizationFilter;
use App\Http\Requests\NewOrderRequest;
use App\Repositories\AmortizationRepository;
use App\Services\AmmortizationService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use App\Recommendation;
use App\RepaymentCycle;
use App\RepaymentDuration;

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
        $data = $this->validate($request, Amortization::updateRules());
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
    public function recommend(AmmortizationService $service, Request $request)
    {
        // dd(request('down_payment'));
        if (request('type') == 'verification' || request('type') == 'credit_check') {
            $data = $request->all();
            $data['verifiedBy'] = auth()->user()->full_name;
            $verifiedData = Recommendation::create([
                "staff_id" => auth()->user()->id,
                "customer_id" => request("customer_id"),
                "type" => request('type'),
                "input_data" => json_encode($data),
                "result" => json_encode([])
            ]);
            return $this->sendSuccess($verifiedData->toArray(), 'data saved successfully');
        }
        if (request('type') == 'formal') {
            $data = [
                'salary' => request('salary'),
                'total_price' => request('total_price'),
                'plan_id' => request('plan_id'),
                'duration' => request('duration'),
                'cycle' => request('cycle'),
            ];
            $user = auth()->user();


            $resp = [
                'ans' => $service->recommend($data)
            ];

            $dataService = [
                'salary' => request('salary'),
                'total_price' => request('total_price'),
                'plan' => DownPaymentRate::where('id', request('plan_id'))->first()->name,
                'duration' => RepaymentDuration::where('id', request('duration'))->first()->name,
                'cycle' => RepaymentCycle::where('id', request('cycle'))->first()->name
            ];

            $recommendation = Recommendation::create([
                "staff_id" => $user->id,
                "customer_id" => request("customer_id"),
                "type" => 'recommendation',
                "input_data" => json_encode($dataService),
                "result" => json_encode($resp)
            ]);
            return ResponseHelper::createSuccessResponse($resp);
        } else {
            $data = [
                'month1' => request('balances')[0],
                'month2' => request('balances')[1],
                'month3' => request('balances')[2],
                'total_price' => request('total_price'),
                'plan_id' => request('plan_id'),
                'duration' => request('duration'),
                'cycle' => request('cycle'),
                'customer_type' => request('customer_type')

            ];
            $user = auth()->user();

            $resp = [
                'ans' => $service->recommendInformal($data)
            ];
            $dataService = [
                'month1' => request('balances')[0],
                'month2' => request('balances')[1],
                'month3' => request('balances')[2],
                'total_price' => request('total_price'),
                'plan' => DownPaymentRate::where('id', request('plan_id'))->first()->name,
                'duration' => RepaymentDuration::where('id', request('duration'))->first()->name,
                'cycle' => RepaymentCycle::where('id', request('cycle'))->first()->name
            ];

            $recommendation = Recommendation::create([
                "staff_id" => $user->id,
                "customer_id" => request("customer_id"),
                "type" => request('type'),
                "input_data" => json_encode($dataService),
                "result" => json_encode($resp)
            ]);
            return ResponseHelper::createSuccessResponse($resp);
        }
    }
}
