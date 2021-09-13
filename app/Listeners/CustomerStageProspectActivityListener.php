<?php

namespace App\Listeners;

use Carbon\Carbon;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Repositories\ProspectActivityRepository;

class CustomerStageProspectActivityListener
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
                'contact_customer_id' => $event->data->id ?? '',
                'user_id' => auth()->id() ?? null,
                'type' => strtolower(class_basename(get_class($event->data->customerStage))),
                'prospect_activity_type' => get_class($event->data->customerStage),
                'prospect_activity_type_id' =>  $event->data->customerStage->id ?? '',
                'date' => Carbon::now()->format('Y-m-d'),
                'text' =>  $event->data->customerStage->name,
            ]
        );

        return true;
    }
}
