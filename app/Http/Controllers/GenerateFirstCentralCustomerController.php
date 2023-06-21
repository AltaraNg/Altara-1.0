<?php

namespace App\Http\Controllers;

use App\Exports\FirstCentralCreditBureauExport;
use App\Models\Customer;
use App\Models\NewOrder;
use Illuminate\Support\Facades\Date;
use Maatwebsite\Excel\Facades\Excel;

class GenerateFirstCentralCustomerController extends Controller
{
    //

    public function index()
    {
        $from = '2021-01-01';
        $to = '2021-06-28';
        $customersQuery = Customer::query()->whereBetween('date_of_registration', [$from, $to])->has('new_orders')->orderBy('date_of_registration')->limit(100);
        // $this->customersQuery = Customer::query()->whereRaw("Date(date_of_registration) >='" . date($from) . "' AND " . "Date(date_of_registration) <='" . date($to) . "'")->has('new_orders');
        // dd($this->customersQuery->toSql());
        $customerIds = (clone $customersQuery)->select('id')->get()->pluck('id')->toArray();

        $orders = NewOrder::query()->whereIn('customer_id', $customerIds)->has('amortization')->with(['amortization', 'latestAmortizationNotPayed', 'latestAmortizationPayed', 'customer:id,first_name,last_name,civil_status'])->get();
        ini_set('max_execution_time', '300');
        $fileName = 'CreditReport_' . Date::now()->format('Y-m-d') . '.xlsx';
        return Excel::download(new FirstCentralCreditBureauExport($customersQuery->get(), $orders), $fileName);
    }
}
