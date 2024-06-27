<?php

namespace App\Events;

use App\Models\NewOrder;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewOrderEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $order;

    /**
     * Create a new event instance.
     *
     * @param $order
     */
    public function __construct(NewOrder $order)
    {
        $this->order = $order;
    }
}
