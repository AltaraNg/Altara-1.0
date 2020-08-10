<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Exceptions\AException;
use App\Inventory;
use App\Repositories\InventoryRepository;
use Carbon\Carbon;

class UpdateInventoryListener
{
    private $inventoryRepo;

    public function __construct(InventoryRepository $inventoryRepository)
    {
        $this->inventoryRepo = $inventoryRepository;
    }

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
            $product = Inventory::where('product_id', $event->order->product_id)->first();
            $this->inventoryRepo->update($product, [
                'sold_date' => Carbon::now(),
                'is_active' => false
            ]);
        }catch (\Exception $e){
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
