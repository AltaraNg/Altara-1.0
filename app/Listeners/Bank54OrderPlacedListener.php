<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Models\NewOrder;

class Bank54OrderPlacedListener
{


    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(NewOrderEvent $event)
    {
        $order = $event->order;
        try {
            if (env('BANK54_IS_ENABLED') && $order->financed_by == NewOrder::BANK54) {
                $curl = curl_init();
                curl_setopt_array($curl, [
                    CURLOPT_URL => env('BANK54_URL') . '/transactions/register',
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
                    CURLOPT_POSTFIELDS => $this->getBank54Data($order, request('bvn')),

                ]);
                $response = curl_exec($curl);
            }
        } catch (\Throwable $th) {
            report($th);
        }
    }
    private function getBank54Data($new_order, $bvn)
    {
        return json_encode([
            'country_code' => 'NG',
            'customer_partner_id' => env('BANK54_ID'),
            'transactions' => [
                [
                    'client' =>  [
                        'first_name' => $new_order->customer->first_name,
                        'last_name' => $new_order->customer->last_name,
                        'bvn' => $bvn,
                    ],
                    'transaction_reference' => $new_order->order_number,
                    'start_date' => $new_order->order_date,
                    'expected_payment_date' => $new_order->amortization[0]->expected_payment_date,
                    'type' => 'Loan',
                    'value' => $new_order->product_price,
                    'financing_requested' => true,
                ]
            ],
            'financed_transactions' => [
                [
                    'transaction_reference' => $new_order->order_number,
                    'amount' => $new_order->product_price,
                    'payments' => $this->getPayments($new_order),
                ]
            ],
        ]);
    }


    public function getPayments($order)
    {
        $payments = [];
        foreach ($order->amortization as $amortization) {
            array_push($payments,  [
                'start_date' => $order->order_date,
                'expected_payment_date' => $amortization->expected_payment_date,
                'amount' => $amortization->expected_amount,
            ]);
        }
        return $payments;
    }
}
