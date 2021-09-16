<?php

namespace App\Http\Controllers;

use App\Http\Filters\DailySalesNewOrderFilter;
use App\Http\Filters\NewOrderFilter;
use App\Http\Requests\NewOrderRequest;
use App\NewOrder;
use App\Repositories\NewOrderRepository;
use App\Services\NewOrdersReportService;
use Illuminate\Http\Response;

class NewOrderController extends Controller
{

    private $newOrderRepository;

    public function __construct(NewOrderRepository $newOrderRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param NewOrderFilter $newOrderFilter
     * @return Response
     */
    public function index(NewOrderFilter $newOrderFilter)
    {
        $orders = $this->newOrderRepository->query($newOrderFilter);

        return $this->sendSuccess($orders->toArray(), 'Orders retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewOrderRequest $request
     * @return Response
     */
    public function store(NewOrderRequest $request)
    {
        $order = $this->newOrderRepository->store($request->validated());

        return $this->sendSuccess($order->toArray(), 'Order Successfully Created');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewOrder $new_order
     * @param NewOrderRequest $request
     * @return Response
     */
    public function update(NewOrder $new_order, NewOrderRequest $request)
    {
        $order = $this->newOrderRepository->update($new_order, $request->validated());

        return $this->sendSuccess($order->toArray(), 'Order updated successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param NewOrder $new_order
     * @return Response
     */
    public function show(NewOrder $new_order)
    {
        return $this->sendSuccess($new_order->toArray(), 'Order retrieved successfully');
    }

    public function repossess(NewOrder $new_order)
    {

        $result = $this->newOrderRepository->repossess($new_order);
        return $this->sendSuccess($result, 'Order repossessed successfully');
    }
    public function report(NewOrderFilter $filter, NewOrdersReportService $newOrdersReportService, DailySalesNewOrderFilter $dailySalesNewOrderFilter)
    {
        $dailySalesNewOrdersQuery = $this->newOrderRepository->reportQuery($dailySalesNewOrderFilter);
        $newOrdersQuery = $this->newOrderRepository->reportQuery($filter)->latest('new_orders.created_at');
        $getTotalSalesPerDay = $newOrdersReportService->getTotalSalesPerDay($dailySalesNewOrdersQuery);
        $additional = $newOrdersReportService->generateMetaData($newOrdersQuery);
        $additional = $additional->put('totalSalesPerDay', $getTotalSalesPerDay);
        return $this->sendSuccess(["meta" => $additional], 'Orders retrieved successfully');
    }
}
