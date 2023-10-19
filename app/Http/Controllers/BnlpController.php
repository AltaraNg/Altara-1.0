<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Helper\ResponseHelper;
use Illuminate\Validation\Rule;
use App\Services\MessageService;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\NewOrderRequest;
use App\Services\AmmortizationService;
use App\Repositories\NewOrderRepository;
use App\Models\CreditCheckerVerification;
use App\Services\CreditCheckerVerificationService;

class BnlpController extends Controller
{

    private CreditCheckerVerificationService $creditCheckerVerificationService;
    private NewOrderRepository $newOrderRepository;
    public function __construct(CreditCheckerVerificationService $creditCheckerVerificationService, NewOrderRepository $newOrderRepository) {
        $this->creditCheckerVerificationService = $creditCheckerVerificationService;
        $this->newOrderRepository = $newOrderRepository;
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
        Log::info(json_encode($response));
        return $this->sendSuccess(['response' => $response], 'Message Response');
    }

    public function createOrder(NewOrderRequest $request, NewOrderRepository $newOrderRepository)
    {
        $order = $newOrderRepository->store($request->validated());
        return $this->sendSuccess(['order' => $order], 'Order created');
    }

    public function updateCreditCheckerVerificationStatus(Request $request, CreditCheckerVerification $creditCheckerVerification)
    {
        $this->validate($request, [
            'status' => ['required', 'string', Rule::in(CreditCheckerVerification::STATUSES)],
            'reason' => ['sometimes', 'string'],
        ]);
        if ($creditCheckerVerification->status == CreditCheckerVerification::FAILED){
            return  $this->sendError('You are not allowed to change the status of a declined or failed credit check', 401);
        }
        $creditCheckerVerification->status = $request->input('status');
        $creditCheckerVerification->reason = $request->input('reason', $creditCheckerVerification->reason);
        $creditCheckerVerification->processed_by =  $request->user()->id;
        $creditCheckerVerification->processed_at = Carbon::now();
        $creditCheckerVerification->update();
        return $this->sendSuccess([], 'Credit check status updated successfully');
    }
    public function allCreditCheckerVerification(Request $request)
    {
        $status = $request->query('status', CreditCheckerVerification::PENDING);
        $creditCheckerVerifications = $this->creditCheckerVerificationService->allCreditCheckerVerification('bnpl', $status);
        return $this->sendSuccess(['creditCheckerVerifications' => $creditCheckerVerifications], 'Data fetched successfully');
    }
}
