<?php

namespace App\Http\Controllers;

use App\Http\Filters\OrderRequestFilter;
use App\Models\OrderRequest;
use App\Notifications\OrderRequestNotification;
use App\Repositories\OrderRequestRepository;
use Illuminate\Http\Request;

class OrderRequestController extends Controller
{
    public $orderRequestRepository;
    private $with = '';
    public function __construct(OrderRequestRepository $orderRequestRepository)
    {
        $this->orderRequestRepository = $orderRequestRepository;
    }

    public function index(OrderRequestFilter $orderRequestFilter)
    {
        $orderRequests = $this->orderRequestRepository->getAll($orderRequestFilter);
        return $this->sendSuccess(['order_requests' => $orderRequests], 'All order requests fetched successfully');
    }

    public function decline(Request $request, OrderRequest $orderRequest)
    {
        $orderRequest->status = OrderRequest::STATUS_DECLINED;
        $orderRequest->declined_by = auth()->id();
        $orderRequest->reason = $request->reason;
        $orderRequest->save();
        $message = $this->getOrderRequestMessage($orderRequest->status, $orderRequest->customer, $orderRequest->reason);
        $orderRequest->customer->notify(new OrderRequestNotification($message));
        return $this->sendSuccess(['order_request' => $orderRequest->fresh()], 'Order request requests successfully declined');
    }
    public function accept(Request $request, OrderRequest $orderRequest)
    {
        $orderRequest->status = OrderRequest::STATUS_ACCEPTED;
        $orderRequest->accepted_by = auth()->id();
        $orderRequest->reason = $request->reason;
        $orderRequest->save();
        $message = $this->getOrderRequestMessage($orderRequest->status, $orderRequest->customer, $orderRequest->reason);

        $orderRequest->customer->notify(new OrderRequestNotification($message));
        return $this->sendSuccess(['order_request' => $orderRequest->fresh()], 'Order request successfully accepted');
    }
    public function process(Request $request, OrderRequest $orderRequest)
    {
        $orderRequest->status = OrderRequest::STATUS_PROCESSED;
        $orderRequest->processed_by = auth()->id();
        $orderRequest->reason = $request->reason;
        $orderRequest->save();
        $message = $this->getOrderRequestMessage($orderRequest->status, $orderRequest->customer, $orderRequest->reason);
        $orderRequest->customer->notify(new OrderRequestNotification($message));
        return $this->sendSuccess(['order_request' => $orderRequest->fresh()], 'Order request successfully processed');
    }

    public function delete(OrderRequest $orderRequest)
    {
        $orderRequest->delete();
        return $this->sendSuccess([], 'Order request successfully deleted');
    }

    private function getOrderRequestMessage($status, $customer, $reason)
    {
        $full_name = $customer->first_name . ' ' . $customer->last_name;
        return 'Dear ' . $full_name . ', your order request has been ' . $status .
            '. REASON: ' . $reason . '.';
    }
}
