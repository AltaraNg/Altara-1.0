<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Exceptions\AException;
use Carbon\Carbon;

class UpdateInventoryListener
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
            $event->order->inventory->update([
                'sold_date' => Carbon::now(),
                'is_active' => false
            ]);
        }catch (\Exception $e){
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
