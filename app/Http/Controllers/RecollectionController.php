<?php

namespace App\Http\Controllers;

use App\Http\Filters\NewOrderFilter;
use App\NewOrder;
use App\Repositories\NewOrderRepository;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

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
}
