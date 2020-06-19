<?php

namespace App\Listeners;

use App\Mail\SendPasswordResetLink;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendPasswordResetLinkListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        Mail::to($event->passwordResets->getOriginal()['email'])->send(new SendPasswordResetLink($event->passwordResets->token, $event->user));
    }
}
