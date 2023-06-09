<?php

namespace App\Events;

use App\Models\PasswordResets;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SendPasswordResetLinkEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $passwordResets;
    /**
     * @var string
     */
    public $user;

    /**
     * Create a new event instance.
     *
     * @param PasswordResets $passwordResets
     * @param string $user
     */
    public function __construct(PasswordResets $passwordResets, string $user)
    {
        $this->passwordResets = $passwordResets;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
