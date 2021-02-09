<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Exceptions\AException;
use App\Helper\Constants;
use App\Helper\LogHelper;
use App\Notifications\NewOrderNotification;
use Illuminate\Support\Str;

class NewOrderListener
{
    /**
     * Handle the event.
     *
     * @param NewOrderEvent $event
     * @return void
     * @throws AException
     */
    public function handle(NewOrderEvent $event)
    {
        try {
            $p = app()->make('App\Amortization\\' .Str::studly($event->order->repaymentCycle->name), ['order' => $event->order])->create();
//            try {
//                $event->order->customer->notify(new NewOrderNotification($event->order));
//            }catch (\Exception $e){
//                //Implement a Logger service to log this error
//                LogHelper::error(strtr(Constants::ORDER_NOTIFICATION_ERROR, $event->order->toArray()), $e);
//            }
        } catch (\Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
