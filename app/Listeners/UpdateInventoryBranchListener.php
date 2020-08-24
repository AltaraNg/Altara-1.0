<?php

namespace App\Listeners;

use App\Exceptions\AException;
use App\Inventory;
use App\Repositories\InventoryRepository;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateInventoryBranchListener
{
    private $inventoryRepo;

    /**
     * Create the event listener.
     *
     * @param InventoryRepository $inventoryRepository
     */
    public function __construct(InventoryRepository $inventoryRepository)
    {
        $this->inventoryRepo = $inventoryRepository;
    }

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
            $product = Inventory::where('product_id', $event->data['product_id'])->first();
            $this->inventoryRepo->update($product, [
                'branch_id' => $event->data['to_id']
            ]);
        }catch (\Exception $e){
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
