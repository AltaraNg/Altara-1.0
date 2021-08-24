<?php

namespace App\Http\Controllers;

use App\PaymentGateway;
use Illuminate\Http\Request;

class PaymentGatewayController extends Controller
{
    //
      //
      public function index()
      {
          return response()->json([
              'paymentgateways' => PaymentGateway::all()
           ]);
      }
}
