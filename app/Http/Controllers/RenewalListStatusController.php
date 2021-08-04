<?php

namespace App\Http\Controllers;

use App\RenewalStatus;

class RenewalListStatusController extends Controller
{
    //
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $renewal_statuses = RenewalStatus::all();
        return response()->json(['data' => $renewal_statuses, 'message' => 'Requested Action Successful'], 200);
    }
}
