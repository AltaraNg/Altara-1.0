<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Http\Filters\PaymentFilter;
use App\Http\Requests\PaymentRequest;
use App\Repositories\RenewalListRepository;
use App\Repositories\PaymentRepository;
use App\Repositories\PaymentReconcileRepository;
use App\Payment;
use Illuminate\Http\Response;

class PaymentController extends Controller
{
    /**
     * @var RenewalListRepository
     */
    private $payment;
    private $paymentRec;

    /**
     * RenewalListController constructor.
     * @param PaymentRepository $paymentRepository
     * @param PaymentReconcileRepository $paymentReconcileRepository
     */
    public function __construct(PaymentRepository $paymentRepository, PaymentReconcileRepository $paymentReconcileRepository)
    {
        $this->payment = $paymentRepository;
        $this->paymentRec = $paymentReconcileRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param PaymentFilter $filter
     * @return Response
     */
    public function index(PaymentFilter $filter)
    {
        $result = $this->payment->getAll($filter);
        return ResponseHelper::createSuccessResponse($result->toArray());
    }

    /**
     * Show resource in storage.
     *
     * @param Payment $payment
     * @return Response
     */
    public function show(Payment $payment)
    {
        return ResponseHelper::createSuccessResponse($payment->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PaymentRequest $request
     * @return Response
     */
    public function store(PaymentRequest $request)
    {
        $result = $this->paymentRec->storeOrCreate($request->validated());
        return ResponseHelper::createSuccessResponse($result->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PaymentRequest $request
     * @param Payment $payment
     * @return Response
     */
    public function update(PaymentRequest $request, Payment $payment)
    {
        $resp = $this->payment->update($payment, $request->validated());
        return ResponseHelper::createSuccessResponse($resp->toArray());
    }
}
