<?php

namespace App\Exports;

use App\Exports\Sheets\CreditInformationSheet;
use App\Exports\Sheets\CustomerSheet;
use App\Models\Customer;
use App\Models\NewOrder;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class FirstCentralCreditBureauExport implements WithMultipleSheets
{
    use Exportable;
    private $customersQuery;
    private $newOrdersQuery;
    public function __construct($customers, $orders)
    {
        $this->customersQuery = $customers;
        $this->newOrdersQuery = $orders;
        // $from = '2021-01-01';
        // $to = '2021-01-28';
        // $this->customersQuery = Customer::query()->whereBetween('date_of_registration', [$from, $to])->has('new_orders')->orderBy('date_of_registration')->limit(100);
        // // $this->customersQuery = Customer::query()->whereRaw("Date(date_of_registration) >='" . date($from) . "' AND " . "Date(date_of_registration) <='" . date($to) . "'")->has('new_orders');
        // // dd($this->customersQuery->toSql());
        // $customerIds = (clone $this->customersQuery)->select('id')->get()->pluck('id')->toArray();
        // $this->newOrdersQuery = NewOrder::query()->whereIn('customer_id', $customerIds)->has('amortization')->with(['amortization', 'latestAmortizationNotPayed', 'latestAmortizationPayed', 'customer:id,first_name,last_name,civil_status']);
        
    }
    public function sheets(): array
    {
        return [
            new CustomerSheet($this->customersQuery),
            new CreditInformationSheet($this->newOrdersQuery),
        ];
    }
}
