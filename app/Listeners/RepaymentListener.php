<?php

namespace App\Listeners;

use App\Customer;
use App\Helper\Constants;
use App\Helper\Helper;
use App\Helper\LogHelper;
use App\Notifications\RepaymentNotification;
use App\OrderStatus;
use App\Repositories\NewOrderRepository;
use App\Services\PaymentService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class RepaymentListener
{

    private $newOrderRepository;
    public function __construct(NewOrderRepository $newOrderRepository)
    {
        $this->newOrderRepository = $newOrderRepository;
      
    }
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $customer = Customer::find($event->newOrder['customer_id']);
        try {

            if (env('SEND_ORDER_SMS')) {
                $order = $event->newOrder->refresh();
                $customer->notify(new RepaymentNotification($order));
                if (Helper::PaymentCompleted($order)) {
                    $this->newOrderRepository->updateOrderStatus($order->id);
                }
            }
        } catch (\Exception $e) {
            LogHelper::error(strtr(Constants::REPAYMENT_NOTIFICATION_ERROR, $event->newOrder->toArray()), $e);
        }
    }
}
