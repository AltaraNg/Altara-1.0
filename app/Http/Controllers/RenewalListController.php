<?php

namespace App\Http\Controllers;

use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;
use App\Order;
use App\RenewalList;
use App\Repositories\RenewalListRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;

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
     * @param Request $request
     */
    public function index(Request $request)
    {
        $requestObject = $this->extractRequestObject($request);
//        $requestObject['branchId'] = 2;
        $order = Order::whereIn('id', function ($query) {
            $query->select('repayment_id')
                ->from('repayment_formal')
                ->where('date_of_next_payment', Carbon::today())
                ->where('4th_pay', '>', 0)
                ->where(function ($query){
                    $query->where('5th_pay', '=', 0)
                        ->orWhere('5th_pay', 'null')
                        ->orWhereNull('5th_pay');
                });
        })
            ->dateFilter('order_date', $requestObject)
            ->orderWithOtherTables($requestObject)
            ->getOrPaginate($requestObject);
            $this->listRepo->getList();
        dd($order);
    }

    public function store()
    {
        $data = $this->validate(request(), RenewalList::$rules);
        $response = $this->listRepo->store($data);

        return response()->json(['data' => $response, 'message' => 'Successfully created'], 201);
    }

    public function list(string $status)
    {
        if(!request('branch_id')) return response()->json(['data' => [], 'message' => 'Branch Id is expected'], 401);
        $orders = $this->listRepo->getListByType($status);

        return response()->json(['data' => $orders, 'message' => 'Successfully request'], 200);
    }

    public function update(RenewalList $item)
    {
        $data = $this->validate(request(), [
            'feedback' => 'sometimes|required',
            'status' => 'sometimes|required|in:successful,callback,unreachable'
        ]);
        $result = $item->update($data);

        return response()->json(['data' => $item, 'message' => 'Successfully Updated'], 200);
//        dump($result);
//        if ($result === 'callback'){
//            $result->callback()->update($data);
//        }
    }
}
