<?php

namespace App\Repositories;

use App\Events\NewOrderEvent;
use App\Helper\Helper;
use App\Inventory;
use App\NewOrder;
use App\OrderStatus;
use App\PaymentType;
use App\RepaymentCycle;
use Carbon\Carbon;

class NewOrderRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return NewOrder::class;
    }

    public function store(array $data)
    {
        $validated = $data;
        $inventory = Inventory::find($data['inventory_id']);
        unset($validated['custom_date']);
        unset($validated['payment_method_id']);
        unset($validated['inventory_id']);
        unset($validated['bank_id']);
        unset($validated['discount']);

        $order = $this->model::create(array_merge($validated, [
            'order_number' => Helper::generateTansactionNumber('AT'),
            'order_date' => Carbon::now(),
            'user_id' => auth()->user()->id,
            'branch_id' => auth()->user()->branch_id,
            'status_id' => OrderStatus::where('name', OrderStatus::ACTIVE)->first()->id,
            'product_id' => $inventory->product_id
        ]));
        if (RepaymentCycle::find($data['repayment_cycle_id'])->name === RepaymentCycle::CUSTOM){
            $order->customDate()->create(['custom_date' => $data['custom_date']]);
        }

        $paymentType = PaymentType::where('type', PaymentType::DOWNPAYMENT)->first()->id;
        $order->amount = $data['down_payment'];
        $order->payment_type_id = $paymentType;
        if (array_key_exists("discount", $data)) {
            $order->discount = $data['discount'];
            $order->discounts()->sync($data['discount']);
        }
        $order->payment_method_id = $data['payment_method_id'];
        $order->bank_id = $data['bank_id'];
        $order->inventory = $inventory;
        event(new NewOrderEvent($order));

        return $order->fresh();
    }
}
