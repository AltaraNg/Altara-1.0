<?php

namespace App\Events;

use App\Models\Amortization;
use App\Models\NewOrder;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class RepaymentEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $newOrder;
    public $amortization;
    /**
     * Create a new event instance.
     *
     * @param $newOrder
     */
    public function __construct(NewOrder $newOrder, Amortization $amortization = null)
    {
        $this->newOrder = $newOrder;
        $this->amortization = $amortization;
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
