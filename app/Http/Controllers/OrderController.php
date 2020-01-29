<?php

namespace App\Http\Controllers;

use App\Helper\ExtractRequestObject;
use App\Helper\OrderConstants;
use App\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller implements OrderConstants
{
    use ExtractRequestObject;

    public function ordersByUser(Request $request, $id)
    {
        if (!isset($id)) return response()->json(['orders' => []], 400);

        $orders = [];
        $customersIdArr = [];
        $newRequestObj = $this->extractRequestObject($request);

        $customers =
            DB::select(
                DB::raw(
                    "SELECT id FROM `customers` WHERE COALESCE(customers.managed_by, customers.user_id) = " . $id . " "));

        foreach ($customers as $customer) {
            array_push($customersIdArr, $customer->id);
        }

        if (count($customersIdArr) > 0) {
            $orders = Order::whereIn('customer_id', $customersIdArr)
                ->orderWithOtherTables($newRequestObj)
                ->getOrPaginate($newRequestObj);
        }

        if (isset($orders['data'])) {
            $orders = [];
        }

        return response()->json([
            'orders' => $orders,
        ]);
    }

    public function directDebitSales(Request $request)
    {
        $newRequestObj = $this->extractRequestObject($request);

        $orders = Order::where('payment_method_id', Self::DIRECT_DEBIT_PAYMENT_METHOD)
            ->orderWithOtherTables($newRequestObj)
            ->getOrPaginate($newRequestObj);

        return response()->json([
            'orders' => $orders,
        ]);
    }
}
