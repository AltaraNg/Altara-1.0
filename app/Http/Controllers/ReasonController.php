<?php

namespace App\Http\Controllers;

use App\Reason;
use Illuminate\Http\Request;

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
