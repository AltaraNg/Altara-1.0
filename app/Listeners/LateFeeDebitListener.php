<?php

namespace App\Listeners;

use App\Helper\Constants;
use App\Helper\LogHelper;
use App\Notifications\LateFeeDebitNotification;

class LateFeeDebitListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        //
        $customer = $event->lateFee->new_orders->customer;
        try {

            if (env('SEND_ORDER_SMS')) {
                $order = $event->lateFee->new_orders->refresh();
                $customer->notify(new LateFeeDebitNotification($order));
            }
        } catch (\Exception $e) {
            LogHelper::error(strtr(Constants::LATE_FEE_DEDUCTION_NOTIFICATION_ERROR, $event->lateFee->new_orders->toArray()), $e);
        }
    }
}
