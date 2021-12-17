<?php

namespace App\Http\Controllers;

use App\GeneralFeedback;
use App\NewOrder;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Filters\NewOrderFilter;
use App\Http\Requests\GeneralFeedbackRequest;
use App\Repositories\NewOrderRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Artisan;
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
        return $this->sendSuccess([$orders->paginate(10)], 'Orders retrieved successfully');
    }

    public function store(GeneralFeedbackRequest $request)
    {
       $order = $this->newOrderRepository->saveFeedBack($request->all());
        return $this->sendSuccess([$order->toArray()], 'Order feedback created');
    }
    public function show(NewOrder $new_order)
    {
        return $this->sendSuccess(['data' => $new_order], 'Order retrieved successfully');
    }

    public function reGenerateCollectionList()
    {
        Artisan::call('make:collection');
        return $this->sendSuccess([], 'Collection list has been successfully generated');
    }
}
