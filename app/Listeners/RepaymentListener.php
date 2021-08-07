<?php

namespace App\Listeners;

use App\Customer;
use App\Helper\Constants;
use App\Helper\LogHelper;
use App\Notifications\RepaymentNotification;
use App\Services\PaymentService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class RepaymentListener
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $customer = Customer::find($event->newOrder['customer_id']);

        $data = [
            "amount" => $event->newOrder->amount,
            "customer_id" => $event->newOrder->customer_id,
            "payment_type_id" => $event->newOrder->payment_type_id,
            "payment_method_id" => $event->newOrder->payment_method_id,
            "bank_id" => $event->newOrder->bank_id
        ];
        PaymentService::logPayment($data, $event->newOrder);
        try {
            if (env('SEND_ORDER_SMS')) {
                $customer->notify(new RepaymentNotification($event->newOrder->refresh()));

            }
        } catch (\Exception $e) {
            LogHelper::error(strtr(Constants::REPAYMENT_NOTIFICATION_ERROR, $event->newOrder->toArray()), $e);
        }
    }
}
