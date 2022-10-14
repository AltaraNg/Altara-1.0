<?php

namespace App\Services;

use App\Customer;
use App\NewOrder;
use App\Helper\Helper;
use App\Helper\Constants;
use App\Helper\LogHelper;
use App\Repositories\NewOrderRepository;
use App\Notifications\RepaymentNotification;

class RepaymentEventService
{
    private $newOrderRepository;
    public function __construct(NewOrderRepository $newOrderRepository) {
        $this->newOrderRepository = $newOrderRepository;
    }
    public function repaymentListenerAction($newOrder)
    {
        $customer = Customer::find($newOrder['customer_id']);
        try {
                $order = $newOrder->refresh();
                $customer->notify(new RepaymentNotification($order));
            if (Helper::PaymentCompleted($order)) {
                $this->newOrderRepository->updateOrderStatus($order->id);
            }
        } catch (\Exception $e) {
            LogHelper::error(strtr(Constants::REPAYMENT_NOTIFICATION_ERROR, $newOrder->toArray()), $e);
        }
    }
    public function bank54RepaymentListenerAction($order)
    {
        if (env('BANK54_IS_ENABLED') && $order->financed_by == NewOrder::BANK54) {
            $data = json_encode([
                "customer_partner_id" => env('BANK54_ID'),
                "payments" => [
                    [
                        "transaction_reference" => $order->order_number,
                        "amount" => $order->amount
                    ]
                ]
            ]);

            try {
                $curl = curl_init();
                curl_setopt_array($curl, [
                    CURLOPT_URL => env('BANK54_URL') . '/financing/bulk-payment',
                    CURLOPT_HTTPHEADER => [
                        'Authorization:' . env('BANK54_API_KEY'),
                        'Content-Type: application/json',
                    ],
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => '',
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => 'POST',
                    CURLOPT_POSTFIELDS =>  $data,

                ]);
                $response = curl_exec($curl);
            } catch (\Throwable $th) {
                report($th);
            }
        }
    }
}
