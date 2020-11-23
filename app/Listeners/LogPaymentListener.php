<?php

namespace App\Listeners;

use App\Services\PaymentService;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class LogPaymentListener
{
    /**
     * Handle the event.
     *
     * @param $event
     * @return void
     */
    public function handle($event)
    {
        $data = [
            "amount" => $event->order->amount,
            "customer_id" => $event->order->customer_id,
            "payment_type_id" => $event->order->payment_type_id,
            "payment_method_id" => $event->order->payment_method_id,
            "bank_id" => $event->order->bank_id
        ];

        PaymentService::logPayment($data, $event->order);
    }
}
