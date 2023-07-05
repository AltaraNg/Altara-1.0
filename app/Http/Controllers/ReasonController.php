<?php

namespace App\Http\Controllers;

use App\Models\Reason;

class ReasonController extends Controller
{
    //
    public function index()
    {
        return response()->json([
            'reasons' => Reason::all()
        ]);
    }
}
