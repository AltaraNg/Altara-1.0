<?php

namespace App\Listeners;

use App\Events\ProspectActivityEvent;
use App\ProspectActivity;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class TodoListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ProspectActivityEvent $event)
    {
        ProspectActivity::create([
            'contact_customer_id' => $event->prospectActivity->customer_id,
            'user_id' => $event->prospectActivity->user_id,
            'type' => strtolower(class_basename(get_class($event->prospectActivity))),
        ]);
    }
}
