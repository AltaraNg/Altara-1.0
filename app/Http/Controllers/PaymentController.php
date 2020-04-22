<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Http\Filters\PaymentListFilter;
use App\Repositories\RenewalListRepository;
use App\Repositories\PaymentListRepository;
use App\Repositories\PaymentRepository;
use App\PaymentList;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PaymentController extends Controller
{
    /**
     * @var RenewalListRepository
     */
    private $tranListRepo;
    private $tranRepo;

    /**
     * RenewalListController constructor.
     * @param PaymentListRepository $transactionListRepository
     * @param PaymentRepository $transactionRepository
     */
    public function __construct(PaymentListRepository $transactionListRepository, PaymentRepository $transactionRepository)
    {
        $this->tranListRepo = $transactionListRepository;
        $this->tranRepo = $transactionRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param PaymentListFilter $filter
     * @return Response
     */
    public function index(PaymentListFilter $filter)
    {
        $result = $this->tranListRepo->getAll($filter);
        return ResponseHelper::createSuccessResponse($result->toArray());
    }

    /**
     * Show resource in storage.
     *
     * @param PaymentList $transaction
     * @return Response
     */
    public function show(PaymentList $transaction)
    {
        return ResponseHelper::createSuccessResponse($transaction->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $data = $this->validate($request, PaymentList::$rules);
        $result = $this->tranRepo->storeOrCreate($data);
        return ResponseHelper::createSuccessResponse($result->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param PaymentList $payment
     * @return Response
     */
    public function update(Request $request, PaymentList $payment)
    {
        $data = $this->validate($request, PaymentList::$updateRules);
        $resp = $this->tranListRepo->update($payment, $data);
        return ResponseHelper::createSuccessResponse($resp->toArray());
    }
}
