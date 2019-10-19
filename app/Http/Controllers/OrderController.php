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
            'dateTo' => request('dateTo'),
            'dateFrom' => request('dateFrom'),
            'pageSize' => request('pageSize'),
            'branchId' => request('branchId')
        ];

        $customers = Customer::where('user_id', $id)->pluck('id');
        $orders = Order::whereIn('customer_id', $customers)->orderWithOtherTables($request)->getOrPaginate($request);

        return response()->json([
            'orders' => $orders
        ]);
    }
}
