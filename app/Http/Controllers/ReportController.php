<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function generateReport(Request $request)
    {
        return response()->json([
            'response' => $request['type'],
        ]);
    }
}
