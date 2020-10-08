<?php

namespace App\Providers;

use App\Events\NewOrderEvent;
use App\Events\OldRepaymentEvent;
use App\Events\ProductTransferEvent;
use App\Events\SendPasswordResetLinkEvent;
use App\Listeners\LogPaymentListener;
use App\Listeners\NewOrderListener;
use App\Listeners\SendPasswordResetLinkListener;
use App\Listeners\UpdateInventoryBranchListener;
use App\Listeners\UpdateInventoryListener;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\Event' => [
            'App\Listeners\EventListener',
        ],
        SendPasswordResetLinkEvent::class => [
            SendPasswordResetLinkListener::class,
        ],
        NewOrderEvent::class => [
            NewOrderListener::class,
            UpdateInventoryListener::class,
            LogPaymentListener::class
        ],
        OldRepaymentEvent::class => [
            LogPaymentListener::class
        ],
        ProductTransferEvent::class => [
            UpdateInventoryBranchListener::class
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
