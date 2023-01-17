<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewOrderRequest;
use App\Services\AmmortizationService;
use Illuminate\Http\Request;
use App\Helper\ResponseHelper;
use App\Repositories\NewOrderRepository;
use App\Services\MessageService;
use Error;

class BnlpController extends Controller
{
    public function __construct()
    {
       
        if (env('BNLP_ADMIN_ACCESS') == null || request()->header('bnlp-admin-access') == null) {
            throw new Error('Please confirm bnlp key is set and also provided in request header');
        }
       
        if (request()->header('bnlp-admin-access') !== env('BNLP_ADMIN_ACCESS')) {
            throw new Error('Invalid access key provided');
        }
    }
    public function previewAmortization(NewOrderRequest $request, AmmortizationService $service)
    {
        $resp = $service->generatePreview($request->validated());
        return ResponseHelper::createSuccessResponse($resp);
    }

    public function sendMessage(Request $request, MessageService $messageService)
    {
        $this->validate($request, [
            'message' => ['required', 'string'],
            'phone_number' => ['required', 'string'],
        ]);
        $response = $messageService->sendMessage($request->input('phone_number'), $request->input('message'));
        return $this->sendSuccess(['response' => $response], 'Message Response');
    }

    public function createOrder(NewOrderRequest $request, NewOrderRepository $newOrderRepository)
    {
        $order = $newOrderRepository->store($request->validated());
        return $this->sendSuccess(['order' => $order], 'Order created');
    }
}
