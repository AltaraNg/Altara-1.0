<?php

namespace App\Listeners;

use App\Customer;
use App\NewOrder;
use App\Notifications\RepaymentNotification;
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
        try {
            $customer->notify(new RepaymentNotification(NewOrder::find($event->newOrder['model_id'])));
        }catch (\Exception $e) {
            //Implement Logger Service to log this Error
        }
    }
}