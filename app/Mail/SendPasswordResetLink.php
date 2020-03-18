<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendPasswordResetLink extends Mailable
{
    use Queueable, SerializesModels;
    public $token;
    /**
     * @var string
     */
    public $user;

    /**
     * Create a new message instance.
     *
     * @param $token
     */
    public function __construct(string $token, string $user)
    {
        //
        $this->token = $token;
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.password-reset');
    }
}
