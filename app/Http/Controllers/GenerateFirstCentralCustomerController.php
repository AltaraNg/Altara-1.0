<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Exports\FirstCentralCreditBureauExport;
use App\NewOrder;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Maatwebsite\Excel\Facades\Excel;

class GenerateFirstCentralCustomerController extends Controller
{
    //

    public function index()
    {
        $customersQuery = Customer::query()->whereHas('new_orders')->limit(100);
        $customersId = (clone $customersQuery)->get()->pluck('id')->toArray();
        $newOrdersQuery  =  NewOrder::query()->whereIn('customer_id', $customersId)->whereHas('customer')->whereHas('amortization')->with(['amortization', 'latestAmortizationNotPayed', 'latestAmortizationPayed']);

        $fileName = 'CreditReport_' . Date::now()->format('Y-m-d') . '.xlsx';
        return Excel::download(new FirstCentralCreditBureauExport($customersQuery, $newOrdersQuery), $fileName);
    }
}
