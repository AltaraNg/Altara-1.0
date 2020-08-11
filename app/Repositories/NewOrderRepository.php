<?php

namespace App\Repositories;

use App\Events\NewOrderEvent;
use App\Helper\Helper;
use App\NewOrder;
use App\OrderStatus;
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
        unset($validated['custom_date']);
        unset($validated['payment_type_id']);
        unset($validated['payment_method_id']);

        $order = $this->model::create(array_merge($validated, [
            'order_number' => Helper::generateTansactionNumber('AT'),
            'order_date' => Carbon::now(),
            'user_id' => auth()->user()->id,
            'branch_id' => auth()->user()->branch_id,
            'status_id' => OrderStatus::where('name', OrderStatus::PENDING)->first()->id
        ]));
        if (RepaymentCycle::find($data['repayment_cycle_id'])->name === RepaymentCycle::CUSTOM){
            $order->customDate()->create(['custom_date' => $data['custom_date']]);
        }

        $order->payment_type_id = $data['payment_type_id'];
        $order->payment_method_id = $data['payment_method_id'];
        event(new NewOrderEvent($order));

        return $order->fresh();
    }
}
