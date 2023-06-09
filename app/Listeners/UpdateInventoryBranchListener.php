<?php

namespace App\Listeners;

use App\Exceptions\AException;
use App\Models\Inventory;

class UpdateInventoryBranchListener
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
            $product = Inventory::find($event->data['inventory_id']);
            $product->update([
                'branch_id' => $event->data['to_id']
            ]);
        }catch (\Exception $e){
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
