<?php

namespace App\Http\Controllers;

use App\OrderType;
use Illuminate\Http\Request;

class OrderTypeController extends Controller
{
    //
    public function index()
    {
        return response()->json([
            'orderTypes' => OrderType::all()
         ]);
    }
}
