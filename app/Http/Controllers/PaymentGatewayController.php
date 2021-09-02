<?php

namespace App\Http\Controllers;

use App\Repositories\PaymentGatewayRepository;


class PaymentGatewayController extends Controller
{
    private $paymentGatewayRepo;

    public function __construct(PaymentGatewayRepository $paymentGatewayRepository)
    {
        $this->paymentGatewayRepo = $paymentGatewayRepository;
    }

    //
    public function index()
    {
        return response()->json([
            'paymentgateways' => $this->paymentGatewayRepo->all()
        ]);
    }
}
