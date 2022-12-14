<?php

namespace App\Listeners;

use App\NewOrder;
use App\Services\RepaymentEventService;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Bank45RepaymentListener
{

    private $repaymentEventService;
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(RepaymentEventService $repaymentEventService)
    {
        $this->repaymentEventService = $repaymentEventService;
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $order =  $event->newOrder;
        $this->repaymentEventService->bank54RepaymentListenerAction($order);
        // if (env('BANK54_IS_ENABLED') && $order->financed_by == NewOrder::BANK54) {
        //     $data = json_encode([
        //         "customer_partner_id" => env('BANK54_ID'),
        //         "payments" => [
        //             [
        //                 "transaction_reference" => $order->order_number,
        //                 "amount" => $order->amount
        //             ]
        //         ]
        //     ]);

        //     try {
        //         $curl = curl_init();
        //         curl_setopt_array($curl, [
        //             CURLOPT_URL => env('BANK54_URL') . '/financing/bulk-payment',
        //             CURLOPT_HTTPHEADER => [
        //                 'Authorization:' . env('BANK54_API_KEY'),
        //                 'Content-Type: application/json',
        //             ],
        //             CURLOPT_RETURNTRANSFER => true,
        //             CURLOPT_ENCODING => '',
        //             CURLOPT_MAXREDIRS => 10,
        //             CURLOPT_TIMEOUT => 0,
        //             CURLOPT_FOLLOWLOCATION => true,
        //             CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        //             CURLOPT_CUSTOMREQUEST => 'POST',
        //             CURLOPT_POSTFIELDS =>  $data,

        //         ]);
        //         $response = curl_exec($curl);
        //         // dd($response);
        //     } catch (\Throwable $th) {
        //         report($th);
        //     }
        // }
    }
}
