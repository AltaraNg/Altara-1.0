<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Exceptions\AException;
use App\InventoryStatus;
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
                'inventory_status_id' => InventoryStatus::where('status', InventoryStatus::SOLD)->first(['id'])
            ]);
        }catch (\Exception $e){
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
