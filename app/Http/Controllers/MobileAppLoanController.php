<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppLoanRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Services\CreditCheckService;
use App\Repositories\NewOrderRepository;
use App\Models\CreditCheckerVerification;
use App\Services\CreditCheckerVerificationService;

class MobileAppLoanController extends Controller
{
    private CreditCheckerVerificationService $creditCheckerVerificationService;
    private NewOrderRepository $newOrderRepository;
    public function __construct(CreditCheckerVerificationService $creditCheckerVerificationService, NewOrderRepository $newOrderRepository) {
        $this->creditCheckerVerificationService = $creditCheckerVerificationService;
        $this->newOrderRepository = $newOrderRepository;
    }

    public function createLoan(AppLoanRequest $request, )
    {
        $loan = $this->newOrderRepository->store($request->validated());
        return $this->sendSuccess(['loan' => $loan], 'Loan created');
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

        $creditCheckerVerification =  $this->creditCheckerVerificationService->updateCreditCheckerVerificationStatus(
            $request->user()->id,
            $request->input('status'), 
            $request->input('reason'),
            $creditCheckerVerification
        );
        
        return $this->sendSuccess([], 'Credit check status updated successfully');
    }
    public function allCreditCheckerVerification(Request $request)
    {
        $status = $request->query('status', CreditCheckerVerification::PENDING);
        $creditCheckerVerifications = $this->creditCheckerVerificationService->allCreditCheckerVerification('loan', $status);
        return $this->sendSuccess(['creditCheckerVerifications' => $creditCheckerVerifications], 'Data fetched successfully');
    }
}