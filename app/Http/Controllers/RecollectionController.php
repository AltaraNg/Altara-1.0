<?php

namespace App\Http\Controllers;

use App\GeneralFeedback;
use App\NewOrder;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Filters\NewOrderFilter;
use App\Repositories\NewOrderRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class RecollectionController extends Controller
{

    /**
     * @var NewOrderRepository
     */
    private $newOrderRepository;

    public function __construct(NewOrderRepository $newOrderRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
    }

    public function index(NewOrderFilter $filter)
    {
        $orders = $this->newOrderRepository->reportQuery($filter);
        $additional = collect([]);
        // $count =  $orders->whereHas('amortization', function ($query) {
        //     $query->whereRaw('amortizations.expected_payment_date < amortizations.actual_payment_date');
        // })->count('new_orders.id');
        // dd($count);
        return $this->sendSuccess([$orders->paginate(10)], 'Orders retrieved successfully');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'new_order_id' => 'required|exists:new_orders,id',
            'feedback' => ['required', 'string'],
            'follow_up_date' => ['required', 'date']
        ]);
        $order = $this->newOrderRepository->firstById($request->new_order_id);
        $feedback = new GeneralFeedback([
            'data' => $request->data,
            'creator_id' => auth()->id(),
            'feedback' => $request->feedback,
            'follow_up_date' => $request->follow_up_date
        ]);
        $order->generalFeedBacks()->save($feedback);
        return $this->sendSuccess([$order->toArray()], 'Order feedback created');
    }
    public function show(NewOrder $new_order)
    {
        return $this->sendSuccess(['data' => $new_order], 'Order retrieved successfully');
    }
}
