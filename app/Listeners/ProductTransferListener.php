<?php

namespace App\Listeners;

use App\Exceptions\AException;
use App\Models\Branch;
use App\Notifications\Models\ProductTransferModel;
use App\Notifications\ProductTransferNotification;

class ProductTransferListener
{
    /**
     * Handle the event.
     *
     * @param object $event
     * @return void
     * @throws AException
     */
    public function handle($event)
    {
        try {
            $branch = Branch::find($event->data['to_id']);
            $branch->notify(new ProductTransferNotification(new ProductTransferModel($event->data['to_id'], $event->data['from_id'], $event->data['inventory_id'])));
        }catch (\Exception $e){
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
