<?php

namespace App\Providers;

use App\Mail\TransportManager;
use Illuminate\Mail\MailServiceProvider as IluminateMailProvider;
use Illuminate\Support\ServiceProvider;

class MailServiceProvider extends IluminateMailProvider
{

    /**
     * Bind the service to IoC.
     * @return void
     */
    public function registerSwiftTransport()
    {
        //bind TransportManager
        $this->app->singleton('swift.transport', function ($app) {
            return new TransportManager($app);
        });
    }
}
