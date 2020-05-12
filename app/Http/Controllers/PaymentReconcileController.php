<?php

namespace App\Http\Controllers;

use App\FinanceReconcile;
use App\Helpers\ResponseHelper;
use App\Http\Filters\PaymentReconcileFilter;
use App\PaymentReconcile;
use App\Repositories\PaymentReconcileRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PaymentReconcileController extends Controller
{
    private $paymentReconcileRepo;

    /**
     * RenewalListController constructor.
     * @param PaymentReconcileRepository $paymentReconcileRepository
     */
    public function __construct(PaymentReconcileRepository $paymentReconcileRepository)
    {
        $this->paymentReconcileRepo = $paymentReconcileRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param PaymentReconcileFilter $filter
     * @return Response
     */
    public function index(PaymentReconcileFilter $filter)
    {
        $result = $this->paymentReconcileRepo->getAll($filter);
        return ResponseHelper::createSuccessResponse($result->toArray());
    }

    /**
     * Show resource in storage.
     *
     * @param PaymentReconcile $payment_reconcile
     * @return Response
     */
    public function show(PaymentReconcile $payment_reconcile)
    {
        return ResponseHelper::createSuccessResponse($payment_reconcile->toArray());
    }


    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param PaymentReconcile $payment_reconcile
     * @return Response
     */
    public function update(Request $request, PaymentReconcile $payment_reconcile)
    {
        $data = $this->validate($request, PaymentReconcile::$updateRules);
        $resp = $this->paymentReconcileRepo->update($payment_reconcile, $data);
        return ResponseHelper::createSuccessResponse($resp->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param PaymentReconcile $payment_reconcile
     * @return Response
     */
    public function finance(Request $request, PaymentReconcile $payment_reconcile)
    {
        $data = $this->validate($request, FinanceReconcile::$updateRules);
        $resp = $payment_reconcile->financeReconcile()->updateOrCreate(['payment_reconcile_id' => $payment_reconcile->id], $data);
        if(request()->has('comment')){
            $resp->comment()->updateOrCreate(['commentable_id' => $resp->id],['comment' => request('comment'), 'user_id' => auth()->user()->id]);
        }
        return ResponseHelper::createSuccessResponse($resp->refresh()->toArray());
    }
}
