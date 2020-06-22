<?php

namespace App\Repositories;

use App\Events\NewOrderEvent;
use App\Helper\ExtractRequestObject;
use App\Helper\Helper;
use App\Helper\OrderObject;
use App\NewOrder;
use App\RepaymentCycle;
use App\StoreProduct;
use Carbon\Carbon;

class NewOrderRepository extends Repository
{
    use OrderObject, ExtractRequestObject;

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
        $product_price = StoreProduct::where('product_id', $data['product_id'])->first()->pc_pprice;
        $validated = $data;
        unset($validated['custom_date']);
        $order = $this->model::create(array_merge($validated, [
            'order_number' => Helper::generateTansactionNumber('PM'),
            'order_date' => Carbon::now(),
            'user_id' => auth()->user()->id,
            'product_price' => $product_price,
            'repayment' => $product_price - $data['down_payment']
        ]));
        if (RepaymentCycle::find($data['repayment_cycle_id'])->name === RepaymentCycle::CUSTOM){
            $order->customDate()->create(['custom_date' => $data['custom_date']]);
        }
        event(new NewOrderEvent($order));
        return $order->fresh();
    }
}
