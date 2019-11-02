<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function ordersByUser($id)
    {
        $orders = [];
        $customersIdArr = [];
        $request = [
            'page' => request('page'),
            'dateTo' => request('dateTo'),
            'dateFrom' => request('dateFrom'),
            'pageSize' => request('pageSize'),
            'branchId' => request('branchId')
        ];

        $customers =
            DB::select(
                DB::raw(
                    "SELECT id FROM `customers` WHERE COALESCE(customers.managed_by, customers.user_id) = " . $id . " "));

        foreach ($customers as $customer) {
            array_push($customersIdArr, $customer->id);
        }

        if (count($customersIdArr) > 0) {
            $orders = Order::whereIn('customer_id', $customersIdArr)->orderWithOtherTables($request)->getOrPaginate($request);
        }

        if (isset($orders['data'])) {
            $orders = [];
        }

        return response()->json([
            'orders' => $orders,
        ]);
    }
}
