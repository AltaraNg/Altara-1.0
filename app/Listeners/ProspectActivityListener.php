<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Repositories\ProspectActivityRepository;

class ProspectActivityListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    private $prospectActivityRepo;
    public function __construct(ProspectActivityRepository $prospectActivityRepository)
    {
        //
        $this->prospectActivityRepo = $prospectActivityRepository;
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $this->prospectActivityRepo->store(
            [
                'contact_customer_id' => $event->data->customer_id ?? $event->data->id,
                'user_id' => auth()->id() ?? null,
                'type' => strtolower(class_basename(get_class($event->data))),
                'type_id' => $event->data->id,
            ]
        );
        return true;
    }
}
