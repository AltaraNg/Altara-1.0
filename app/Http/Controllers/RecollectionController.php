<?php

namespace App\Http\Controllers;

use App\Exports\CollectionListExport;
use App\GeneralFeedback;
use App\NewOrder;
use App\Repositories\RecollectionRepository;
use App\Services\RecollectionService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Http\Filters\NewOrderFilter;
use App\Http\Requests\GeneralFeedbackRequest;
use App\Repositories\NewOrderRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class RecollectionController extends Controller
{

    /**
     * @var NewOrderRepository
     */
    private $newOrderRepository;
    private $recollectionRepository;

    public function __construct(NewOrderRepository $newOrderRepository, RecollectionRepository $recollectionRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
        $this->recollectionRepository = $recollectionRepository;
    }

    public function index(NewOrderFilter $filter, RecollectionService $recollectionService)
    {
        $collectQuery = $this->newOrderRepository->reportQuery($filter);
        if (request()->query('recollection') == 'all') {
            $collectQuery = $this->newOrderRepository->reportQuery($filter);
            $additional['stats'] = $recollectionService->generateStats(clone $collectQuery);
            $additional['total_sales'] = $collectQuery->count();
            return $this->sendSuccess([$collectQuery->paginate(10) ?? [], "meta" => $additional], 'Orders and stats retrieved successfully');
        }
        return $this->sendSuccess([$collectQuery->paginate(10)], 'Orders retrieved successfully');
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

    public function reGenerateCollectionList(): Response
    {
        Artisan::call('make:collection');
        return $this->sendSuccess([], 'Collection list has been successfully generated');
    }

    public function exportCollectionList(NewOrderFilter $filter, RecollectionService $recollectionService)
    {
        $collectQuery = $this->newOrderRepository->reportQuery($filter);
        $data = $recollectionService->generateCollectionListCSV($collectQuery);
         return Excel::download(new CollectionListExport($data), 'CollectionList.csv');
    }
}
