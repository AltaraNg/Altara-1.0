<?php

namespace App\Http\Controllers;

use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;
use App\RenewalList;
use App\Repositories\RenewalListRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

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
     * @return JsonResponse
     * @throws ValidationException
     */
    public function index()
    {
        $this->validate(request(), ['branch_id' => 'sometimes|required']);
        $orders = $this->listRepo->generateTwoRepaymentList();

        return response()->json(['data' => $orders, 'message' => 'Action Successful'], 200);
    }

    /**
     * Persist Renewal List Orders that are treated
     * @return JsonResponse
     * @throws ValidationException
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
     * @return JsonResponse
     * @throws ValidationException
     */
    public function list(string $status)
    {
        $this->validate(request(), ['branch_id' => 'sometimes|required']);
        $orders = $this->listRepo->getListByType($status);

        return response()->json(['data' => $orders, 'message' => 'Successfully request'], 200);
    }

    /**
     * Update Callbacks and Unreachable treated Orders
     * @param RenewalList $renewal_list
     * @return JsonResponse
     * @throws ValidationException
     */
    public function update(RenewalList $renewal_list)
    {
        $data = $this->validate(request(), RenewalList::updateRules());
        $this->listRepo->update($renewal_list, $data);

        return response()->json(['data' => $renewal_list, 'message' => 'Successfully Updated'], 200);
    }


    /**
     * Update Callbacks and Unreachable treated Orders
     * @return JsonResponse
     */
    public function newOrderRenewals()
    {
        $orders = $this->listRepo->getNewOrdersRenewal();
        return response()->json(['data' => $orders], 200);
    }
}
