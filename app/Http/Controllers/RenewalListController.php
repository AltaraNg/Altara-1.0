<?php

namespace App\Http\Controllers;

use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;
use App\RenewalList;
use App\Repositories\RenewalListRepository;

class RenewalListController extends Controller
{
    use OrderObject, ExtractRequestObject;

    /**
     * @var RenewalListRepository
     */
    private $listRepo;

    /**
     * RenewalListController constructor.
     * @param RenewalListRepository $listRepository
     */
    public function __construct(RenewalListRepository $listRepository)
    {
        $this->listRepo = $listRepository;
    }

    /**
     * Generate Orders that has two repayment left
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $this->validate(request(), ['branch_id' => 'sometimes|required']);
        $orders = $this->listRepo->generateTwoRepaymentList();

        return response()->json(['data' => $orders, 'message' => 'Successfully Updated'], 200);
    }

    /**
     * Persist Renewal List Orders that are treated
     * @return \Illuminate\Http\JsonResponse
     */
    public function store()
    {
        $data = $this->validate(request(), RenewalList::rules());
        $response = $this->listRepo->store($data);

        return response()->json(['data' => $response, 'message' => 'Successfully created'], 201);
    }

    /**
     * Generate treated renewal list orders based on status
     * @param string $status
     * @return \Illuminate\Http\JsonResponse
     */
    public function list(string $status)
    {
        $this->validate(request(), ['branch_id' => 'sometimes|required']);
        $orders = $this->listRepo->getListByType($status);

        return response()->json(['data' => $orders, 'message' => 'Successfully request'], 200);
    }

    /**
     * Update Callbacks and Unreachable treated Orders
     * @param RenewalList $list
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(RenewalList $list)
    {
        $data = $this->validate(request(), RenewalList::updateRules());
        $this->listRepo->update($list, $data);

        return response()->json(['data' => $list, 'message' => 'Successfully Updated'], 200);
    }
}
