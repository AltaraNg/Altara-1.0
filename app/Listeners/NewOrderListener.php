<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Exceptions\AException;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Str;

class NewOrderListener
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
     * @param NewOrderEvent $event
     * @return void
     * @throws AException
     */
    public function handle(NewOrderEvent $event)
    {
//        dd($event);
        try {
            $p = app()->make('App\Amortization\\' .Str::studly('bi_monthly'), ['order' => $event])->create();
        } catch (\Exception $e) {
//            dump($e);
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
