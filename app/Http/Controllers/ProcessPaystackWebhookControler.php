<?php

namespace App\Http\Controllers;

use App\Models\BankAccount;
use App\Models\PaystackClientCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProcessPaystackWebhookControler extends Controller
{
    public function processPaystackWebhook(Request $request)
    {
        try {
            if ($request->method() !== 'POST' || !$request->hasHeader('X-Paystack-Signature')) {
                abort(403);
            }
            $input = $request->getContent();
            $paystackSecretKey = config('paystack.secretKey');
            // Validate event using the signature
            $signature = hash_hmac('sha512', $input, $paystackSecretKey);
            if ($request->header('X-Paystack-Signature') !== $signature) {
                return response()->json(['status' => 'failed'], 403);
            }

            // Parse the event as an object and handle the event
            $event = json_decode($input);
            Log::info('Paystack Event', ['event' => $event]);
            switch ($event->event) {
                case 'customeridentification.success':
                    $client = PaystackClientCode::query()
                        ->where('customer_code', $event->data->customer_code)
                        ->where('customer_email', $event->data->email)
                        ->first();
                    if ($client) {
                        BankAccount::query()->where('tenant_id', $client->tenant_id)->update([
                            'kyc_status' => 'verified'
                        ]);
                    }
                    break;
                case 'customeridentification.failed':
                    $client = PaystackClientCode::query()
                        ->where('customer_code', $event->data->customer_code)
                        ->where('customer_email', $event->data->email)
                        ->first();
                    if ($client) {
                        BankAccount::query()->where('tenant_id', $client->tenant_id)->update([
                            'kyc_status' => 'failed',
                            'reason' => $event->data->reason,
                        ]);
                    }
                    break;
                default:
                    Log::info('Paystack Event', ['event' => $event]);

            }
            return response()->json(['status' => 'success']);
        } catch (\Exception $exception) {
            Log::error($exception);
            return response()->json(['status' => 'failed'], 403);
        }

    }
}
