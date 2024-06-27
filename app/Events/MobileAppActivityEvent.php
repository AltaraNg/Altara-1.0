<?php

namespace App\Events;

use App\Models\Customer;
use App\Models\MobileAppActivity;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MobileAppActivityEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public MobileAppActivity $mobileAppActivity;
    public  Customer $customer;
    public  mixed $meta;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(MobileAppActivity $mobileAppActivity, Customer $customer, mixed $meta)
    {
        $this->mobileAppActivity = $mobileAppActivity;
        $this->customer = $customer;
        $this->meta = $meta;
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
