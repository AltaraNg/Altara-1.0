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
            'name' => '',
            'features' => 'required|array|min:3|max:3',
            'features.*' => 'required|array|min:4|max:4',
        ]);

        $resp = $this->creditChSer->getLoans($data['features']);
        return response()->json(['data' => $resp]);
    }
}
