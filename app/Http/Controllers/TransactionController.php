<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Http\Filters\TransactionFilter;
use App\Http\Filters\TransactionListFilter;
use App\Repositories\RenewalListRepository;
use App\Repositories\TransactionListRepository;
use App\Repositories\TransactionRepository;
use App\TransactionList;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TransactionController extends Controller
{
    /**
     * @var RenewalListRepository
     */
    private $tranListRepo;
    private $tranRepo;

    /**
     * RenewalListController constructor.
     * @param TransactionListRepository $transactionListRepository
     * @param TransactionRepository $transactionRepository
     */
    public function __construct(TransactionListRepository $transactionListRepository, TransactionRepository $transactionRepository)
    {
        $this->tranListRepo = $transactionListRepository;
        $this->tranRepo = $transactionRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param TransactionListFilter $filter
     * @return Response
     */
    public function index(TransactionListFilter $filter)
    {
        $result = $this->tranListRepo->getAll($filter);
        return ResponseHelper::createSuccessResponse($result->toArray());
    }

    /**
     * Show resource in storage.
     *
     * @param TransactionList $transaction
     * @return Response
     */
    public function show(TransactionList $transaction)
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
        $data = $this->validate($request, TransactionList::$rules);
        $result = $this->tranRepo->storeOrCreate($data);
        return ResponseHelper::createSuccessResponse($result->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param TransactionList $transaction
     * @return Response
     */
    public function update(Request $request, TransactionList $transaction)
    {
        $data = $this->validate($request, TransactionList::$updateRules);
        $resp = $this->tranListRepo->update($transaction, $data);
        return ResponseHelper::createSuccessResponse($resp->toArray());
    }
}
