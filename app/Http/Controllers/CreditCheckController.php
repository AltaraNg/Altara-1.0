<?php

namespace App\Http\Controllers;

use App\Services\CreditCheckService;
use Illuminate\Http\Request;

class CreditCheckController extends Controller
{
    private $creditChSer;
    public function __construct(CreditCheckService $service)
    {
        $this->creditChSer = $service;
    }

    public function check(Request $request)
    {
        $data = $this->validate($request, [
            'balances' => 'required|array|min:3|max:3',
            'balances.*' => 'required|array|min:4|max:4',
        ]);

        $resp = $this->creditChSer->getLoans($data['balances']);
        return response()->json(['data' => $resp]);
    }
}
