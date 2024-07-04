<?php

namespace App\Repositories;

use App\Amortization\Custom;
use App\Events\NewOrderEvent;
use App\Exceptions\AException;
use App\Helper\Helper;
use App\Models\Branch;
use App\Models\BusinessType;
use App\Models\Customer;
use App\Models\GeneralFeedback;
use App\Models\Inventory;
use App\Models\InventoryStatus;
use App\Models\NewOrder;
use App\Models\OrderStatus;
use App\Models\PaymentGateway;
use App\Models\PaymentType;
use App\Models\RaffleDrawCode;
use App\Models\RepaymentCycle;
use Carbon\Carbon;
use Exception;

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

    public function reportQuery($filter)
    {
        return $this->model::filter($filter);
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
        unset($validated['bvn']);
        unset($validated['fixed_repayment']);
        unset($validated['account_number']);
        unset($validated['account_name']);
        unset($validated['bank_name']);
        unset($validated['reference']);
        $raffleCode = array_key_exists('raffle_code', $validated);
        $costPriceIsSent = array_key_exists('cost_price', $validated);
        if ($costPriceIsSent){
            unset($validated['cost_price']);
        }

        if ($raffleCode){
            $raffleCodeItem = RaffleDrawCode::where('code', $validated['raffle_code'])->first();

            unset($validated['raffle_code']);
        }

        if ($validated['financed_by'] != NewOrder::ALTARA_BNPL || $data['financed_by'] == NewOrder::COLLECTION_CLIENT) {
            unset($validated['bnpl_vendor_product_id']);
        }
        if ($data['financed_by'] === NewOrder::ALTARA_BNPL) {
            $user_id = $validated['owner_id'];
            $branch_id = (Customer::where('id', $validated['customer_id'])->first())->branch_id;
        } elseif ($data['financed_by'] === NewOrder::ALTARA_LOAN_APP) {
            $user_id = $validated['owner_id'];
            $branch_id = (Customer::where('id', $validated['customer_id'])->first())->branch_id ?? Branch::query()->where('name', 'Ikoyi')->first()->id;
        }else {
            $user_id = auth()->user()->id;
            $branch_id = auth()->user()->branch_id;
        }
        $businessType = BusinessType::query()->where('id', $data['business_type_id'])->first();

        $order = $this->model::create(array_merge($validated, [
            'order_number' => Helper::generateTansactionNumber('AT'),
            'order_date' => $validated['order_date'] ?? Carbon::now(),
            'user_id' => $user_id,
            'branch_id' => $branch_id,
            'status_id' => $validated['repayment'] > 0 &&  $businessType->slug != 'ap_cash_n_carry' ? OrderStatus::where('name', OrderStatus::ACTIVE)->first()->id : OrderStatus::where('name', OrderStatus::COMPLETED)->first()->id,
            'product_id' => $inventory->product_id
        ]));

        if($raffleCode){
            $raffleCodeItem->update([
                'order_id' => $order->id
            ]);
        }


        if (RepaymentCycle::find($data['repayment_cycle_id'])->name === RepaymentCycle::CUSTOM) {
            $order->customDate()->create(['custom_date' => $data['custom_date']]);
            $order->custom_date = $data['custom_date'];
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
        $order->fixed_repayment = $data['fixed_repayment'];
        if ($costPriceIsSent){
            $order->cost_price = $data['cost_price'];
        }

        $order = $order->load('businessType', 'discount', 'customer', 'bnplVendorProduct', 'repaymentDuration', 'repaymentCycle', 'product', 'downPaymentRate');
        event(new NewOrderEvent($order));

        return $order->fresh();
    }
    public function repossess($model)
    {
        try {
            //code...
            $model->status_id = OrderStatus::where('name', OrderStatus::REPOSSESSED)->first()->id;
            $inventory = Inventory::where('product_id', $model->product_id)->first();
            $inventory->inventory_status_id = InventoryStatus::where('status', InventoryStatus::REPOSSESSED)->first()->id;
            $model->save();
            $inventory->save();
            return $model->toArray();
        } catch (Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }
    }

    public function updateOrderStatus($orderId)
    {
        $order = $this->model::find($orderId);
        $order->update(['status_id' =>  OrderStatus::where('name', OrderStatus::COMPLETED)->first()->id]);
    }

    public function firstById(int $orderId)
    {
        return $this->model::findOrFail($orderId);
    }
    public function saveFeedBack($data)
    {
        $order = $this->firstById($data['new_order_id']);
        $feedback = new GeneralFeedback([
            'reason_id' => $data['reason_id'],
            'data' =>  $data['data'],
            'creator_id' => auth()->id(),
            'feedback' => $data['feedback'],
            'follow_up_date' => $data['follow_up_date']
        ]);
        return $order->generalFeedBacks()->save($feedback);
    }

    public function getDirectDebitOrderWithUnpaidAmortization(int $order_id)
    {
        return $this->model::where('id', $order_id)
            ->where('payment_gateway_id', PaymentGateway::where('name', PaymentGateway::PAYSTACK)->first()->id)
            ->has('authCode')
            ->has('unpaidAmortizations')
            ->with('customer')
            ->first();
    }

    public function changeOrderStatus(array $data)
    {
        $order = $this->firstById($data['order_id']);
        $order->status_id = $data['status_id'];
        $order->save();
        return $order;
    }
}
