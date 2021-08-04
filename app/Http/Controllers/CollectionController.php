<?php

namespace App\Http\Controllers;

use App\Http\Filters\NewOrderFilter;
use App\Http\Requests\CollectionRequest;
use App\Repositories\NewOrderRepository;
use App\Services\ReminderService;
use Illuminate\Http\Response;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */

    private $reminder_service;
    /**
     * @var NewOrderRepository
     */
    private $newOrderRepository;

    public function __construct(ReminderService $reminder_service, NewOrderRepository $newOrderRepository)
    {
        $this->reminder_service = $reminder_service;
        $this->newOrderRepository = $newOrderRepository;
    }
    public function index(NewOrderFilter $filter)
    {

        $orders = $this->newOrderRepository->query($filter);
        return $this->sendSuccess($orders->toArray(), 'Orders retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CollectionRequest $request
     * @return Response
     */
    public function store(CollectionRequest $request)
    {
        $this->reminder_service->saveCollectionNotifications($request->validated());

        return $this->sendSuccess([], 'Saved Successfully');


    }
}
