<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Http\Requests\PaystackAuthCodeRequest;
use App\PaystackAuthCode;
use App\Repositories\PaystackAuthCodeRepository;
use App\Services\CreditCheckService;

class PaystackAuthCodeController extends Controller
{
    //
    private $paystackAuthCode;

    public function __construct(PaystackAuthCodeRepository $paystackAuthCodeRepo)
    {
        $this->paystackAuthCode = $paystackAuthCodeRepo;
    }

    public function store(PaystackAuthCode $model, PaystackAuthCodeRequest $request)
    {

        $result = $this->paystackAuthCode->updateOrCreate($model, ['order_id' => $request->input('order_id')], [
            'order_id' => $request->input('order_id'),
            'auth_code' => $request->input('auth_code'),
        ]);
        $elem = PaystackAuthCode::query()->where('order_id', $request->input('order_id'))->first();
        if ($request->has('account_number') && $result) {
            CreditCheckService::accountNumberVerification(
                $elem->order->customer_id,
                $request->order_id,
                $request->input('account_number'),
                $request->input('account_name'),
                $request->input('bank_name')
            );
        }
        return ResponseHelper::createSuccessResponse($result->toArray());
    }
}