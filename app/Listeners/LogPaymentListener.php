<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Services\PaymentService;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class LogPaymentListener
{
    /**
     * Handle the event.
     *
     * @param NewOrderEvent $event
     * @return void
     */
    public function handle(NewOrderEvent $event)
    {
        $data = [
            "amount" => $event->order->down_payment,
            "customer_id" => $event->order->customer_id,
            "payment_type_id" => $event->order->payment_type_id,
            "payment_method_id" => $event->order->payment_method_id
        ];

        PaymentService::logPayment($data, $event->order);
    }
}
