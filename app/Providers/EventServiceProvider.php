<?php

namespace App\Providers;

use App\Events\NewOrderEvent;
use App\Events\OldRepaymentEvent;
use App\Events\ProductTransferEvent;
use App\Events\ProspectActivityEvent;
use App\Events\SendPasswordResetLinkEvent;
use App\Events\RepaymentEvent;
use App\Listeners\LogPaymentListener;
use App\Listeners\NewOrderListener;
use App\Listeners\ProductTransferListener;
use App\Listeners\ProspectFeedbackListener;
use App\Listeners\ProspectCustomerStageListener;
use App\Listeners\ProspectTodoListener;
use App\Listeners\RepaymentListener;
use App\Listeners\SendPasswordResetLinkListener;
use App\Listeners\UpdateInventoryBranchListener;
use App\Listeners\UpdateInventoryListener;
use App\Listeners\UpdateInventoryDictListener;
use App\Listeners\UpdateAmortizationListener;
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
        ProspectActivityEvent::class => [
            ProspectFeedbackListener::class,
            ProspectCustomerStageListener::class,
            ProspectTodoListener::class,
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
