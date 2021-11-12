<?php

namespace App\Events;

use App\ContactCustomer;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class CustomerCreatedEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $reg_id;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($reg_id)
    {
        $this->reg_id = $reg_id;
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
