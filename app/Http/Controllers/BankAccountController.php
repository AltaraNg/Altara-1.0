<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\BankAccount;
use App\Models\PaystackClientCode;
use App\Services\PaystackService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class BankAccountController extends Controller
{

    public PaystackService $paystackService;

    public function __construct(PaystackService $paystackService)
    {
        $this->paystackService = $paystackService;
    }

    public function resolveAccountNumber(Request $request)
    {
        $request->validate([
            'account_number' => ['required', 'string', 'max:12'],
            'bank_id' => ['required', 'exists:banks,id'],
        ]);

        $account_number = $request->input('account_number');
        $bank_code = Bank::where('id', $request->input('bank_id'))->first()->code;
        $response = $this->paystackService->resolveAccountNumber($account_number, $bank_code);


        if ($response['status'] == 'failed') {
            return $this->respondError($response['message']);
        }
        $data = $response['data'];

        return $this->sendSuccess([
            "account_number" => $data['account_number'],
            "account_name" => $data['account_name'],
        ], 'Account number resolved');
    }

    public function initiateKyc(Request $request)
    {
        $user = $request->user();
        $validated = $request->validate([
            "first_name" => ["required", "string", "max:190"],
            "last_name" => ["required", "string", "max:190"],
            "account_number" => ["required", "string", "max:190"],
            "account_name" => ["required", "string", "max:190"],
            "bank_id" => ["required", "integer", "exists:banks,id"],
            "bvn" => ["required", "string", "max:11", "min:11"],
            "phone" => ["required", "string", "max:11"],
        ]);

        $bank = Bank::query()->where('id', $validated['bank_id'])->first();

        if ($bank == null) {
            return $this->sendError("Invalid bank supplied", 422, [], 422);
        }

        $clientPaystackCode = PaystackClientCode::query()
            ->where('customer_email', $user->email)
            ->where('tenant_id', $user->tenant_id)
            ->first();
        if ($clientPaystackCode == null) {
            $response = $this->paystackService->createCustomer($user->email, $validated['first_name'], $validated['last_name'], $validated['phone']);
            if ($response == null) {
                return $this->sendError("An error occurred, try again later", 400, [], 400);
            }
            $data = $response->json('data');
            $clientPaystackCode = PaystackClientCode::query()->updateOrCreate(['tenant_id' => $user->tenant_id,], [
                'customer_code' => $data['customer_code'],
                'customer_id' => $data['id'],
                'customer_email' => $data['email'],
            ]);
        }

        $user->full_name = $validated['first_name'] . " " . $validated['last_name'];
        $user->phone_number = $validated['phone'];
        $user->save();

        $message = $this->paystackService->initiatKyc(
            $validated['account_number'],
            $validated['bvn'],
            $bank->code,
            $validated['first_name'],
            $validated['last_name'],
            $clientPaystackCode->customer_code,
        );
        if ($message != null) {
            if (str_contains($message, 'BVN')) {
                $message = "BVN cannot be more 11 characters than";
            } elseif (str_contains($message, 'Customer already validated')) {
                $message = "Kyc has already been processed";
            } else {
                $message = "An error occurred while trying to validate the bank account, try again later";
            }
            return $this->sendError($message, 400, [], 400);
        }

        BankAccount::query()->updateOrCreate(
            [
                "tenant_id" => $user->tenant_id,
            ],
            [
                "first_name" => $validated['first_name'],
                "last_name" => $validated['last_name'],
                "account_number" => $validated['account_number'],
                "account_name" => $validated['account_name'],
                "kyc_status" => 'verifying',
                "bvn" => $validated['bvn'],
                "bank_id" => $validated['bank_id'],
            ]
        );

        return $this->sendSuccess([], "KYC verification in progress, check back later");
    }

    public function show()
    {
        $user = auth()->user();
        $bankAccount = BankAccount::query()->where('tenant_id', $user->tenant_id)->first();
        return $this->sendSuccess(['bankAccount' => $bankAccount], "Bank account details");
    }


}
