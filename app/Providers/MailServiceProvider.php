<?php

namespace App\Providers;

use App\Mail\TransportManager;
use Illuminate\Mail\MailServiceProvider as IlluminateMailProvider;
use Illuminate\Support\ServiceProvider;

class MailServiceProvider extends IlluminateMailProvider
{
    /**
     * Register the Illuminate mailer instance.
     *
     * @return void
     */
    protected function registerIlluminateMailer()
    {
        $this->app->singleton('mail.manager', function ($app) {
            return new TransportManager($app);
        });

        $this->app->bind('mailer', function ($app) {
            return $app->make('mail.manager')->mailer();
        });
    }
}
