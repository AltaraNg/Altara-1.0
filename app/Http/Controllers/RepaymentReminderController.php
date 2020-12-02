<?php

namespace App\Http\Controllers;

use App\Http\Filters\NewOrderFilter;
use App\Http\Requests\PaymentReminderRequest;
use App\Repositories\NewOrderRepository;
use App\Services\ReminderService;
use Illuminate\Http\Response;

class RepaymentReminderController extends Controller
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
        $orders = $this->reminder_service->fetchOrders();
        return $this->sendSuccess($orders->toArray(), 'Orders retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PaymentReminderRequest $request
     * @return Response
     */
    public function store(PaymentReminderRequest $request)
    {
        $this->reminder_service->saveCallNotifications($request->validated());

        return $this->sendSuccess([], 'Saved Successfully');


    }
}
