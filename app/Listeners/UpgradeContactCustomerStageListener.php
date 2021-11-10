<?php

namespace App\Listeners;

use App\ContactCustomer;
use App\CustomerStage;
use App\Events\CustomerStageUpdatedEvent;
use App\Events\NewOrderEvent;
use App\Repositories\ContactCustomerRepository;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpgradeContactCustomerStageListener
{
    private $contactRepo;

    public function __construct(ContactCustomerRepository $contactRepository)
    {
        $this->contactRepo = $contactRepository;
    }

    /**
     * Handle the event.
     *
     * @param object $event
     * @return void
     */
    public function handle($event)
    {
        $order = $event->order;
        //check if orders is successfully created and customer is true
        if ($order && $order->customer) {
            //check if reg_id is present
            //and if customer does not already have more than 1 order in the system to prevent upgrading customer stage status everytime an order is placed against it.
            //This block of code will only run the first time an order is placed against the customer
            if ($order->customer->reg_id != null && $order->customer->new_orders->count() < 2) {
                $customer_contact = ContactCustomer::where('reg_id', $order->customer->reg_id)->first();
                $contact_customer = $this->contactRepo->update($customer_contact, ['customer_stage_id' => CustomerStage::where('name', CustomerStage::PURCHASED)->first()->id]);
                if ($contact_customer->wasChanged('customer_stage_id')) {
                    event(new CustomerStageUpdatedEvent($customer_contact->refresh()));
                }
            }
        }
    }
}
