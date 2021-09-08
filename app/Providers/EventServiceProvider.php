<?php

namespace App\Providers;

use App\Events\NewOrderEvent;
use App\Events\RepaymentEvent;
use App\Events\TodoCreatedEvent;
use App\Events\OldRepaymentEvent;
use App\Listeners\NewOrderListener;
use App\Events\FeedbackCreatedEvent;
use App\Events\ProductTransferEvent;
use App\Listeners\RepaymentListener;
use App\Listeners\LogPaymentListener;
use Illuminate\Support\Facades\Event;
use App\Events\CustomerStageUpdatedEvent;
use App\Events\SendPasswordResetLinkEvent;
use App\Listeners\ProductTransferListener;
use App\Listeners\UpdateInventoryListener;
use App\Listeners\ProspectActivityListener;
use App\Listeners\UpdateAmortizationListener;
use App\Listeners\UpdateInventoryDictListener;
use App\Listeners\SendPasswordResetLinkListener;
use App\Listeners\UpdateInventoryBranchListener;
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
            UpdateInventoryListener::class,
            LogPaymentListener::class,
            NewOrderListener::class,
            UpdateInventoryDictListener::class
        ],
        OldRepaymentEvent::class => [
            LogPaymentListener::class
        ],
        ProductTransferEvent::class => [
            UpdateInventoryBranchListener::class,
            ProductTransferListener::class
        ],
        RepaymentEvent::class => [
            UpdateAmortizationListener::class,
            RepaymentListener::class
        ],
        TodoCreatedEvent::class => [
            ProspectActivityListener::class
        ],
        FeedbackCreatedEvent::class => [
            ProspectActivityListener::class
        ],
        CustomerStageUpdatedEvent::class => [
            ProspectActivityListener::class
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
