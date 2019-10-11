<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Order;

class OrderController extends Controller
{
    public function ordersByUser($id)
    {
        $request = [
            'page' => request('page'),
            'date_to' => request('date_to'),
            'date_from' => request('date_from'),
            'page_size' => request('page_size'),
        ];

        $customers = Customer::where('user_id', $id)->pluck('id');
        $orders = Order::whereIn('customer_id', $customers)->orderWithOtherTables($request)->getOrPaginate($request);
        return response()->json([
            'orders' => $orders
        ]);
    }
}
