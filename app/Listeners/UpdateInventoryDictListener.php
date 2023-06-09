<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Exceptions\AException;
use App\Models\InventoryDictionary;

class UpdateInventoryDictListener
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
            $dict = InventoryDictionary::where('product_id', $event->order->product_id)
                ->where('branch_id', $event->order->branch_id);
            $dict->decrement('quantity');
        }catch (\Exception $e){
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
