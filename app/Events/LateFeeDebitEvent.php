<?php

namespace App\Events;

use App\Models\LateFee;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LateFeeDebitEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $lateFee;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(LateFee $lateFee)
    {
        $this->lateFee = $lateFee;
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
