<?php

namespace App\Listeners;

use App\Events\MobileAppActivityEvent;
use App\Models\CustomerMobileAppAudit;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class MobileAppActivityListener
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
    public function handle(MobileAppActivityEvent $mobileAppActivityEvent)
    {
        try {
            CustomerMobileAppAudit::query()->create([
                'mobile_app_activity_id' => $mobileAppActivityEvent->mobileAppActivity->id,
                'customer_id' => $mobileAppActivityEvent->customer->id,
                'meta' => $mobileAppActivityEvent->meta,
            ]);
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
        }
    }
}
