<?php

namespace App\Events;

use App\PasswordResets;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class SendPasswordResetLinkEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $passwordResets;

    /**
     * Create a new event instance.
     *
     * @param $passwordResets
     */
    public function __construct(PasswordResets $passwordResets)
    {
        $this->passwordResets = $passwordResets;
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
