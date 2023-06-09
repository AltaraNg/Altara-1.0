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
    public function __construct()
    {
        $from = '2021-01-01';
        $to = '2021-12-28';
        $this->customersQuery = Customer::query()->whereBetween('created_at', [$from, $to])->has('new_orders');
        $customerIds = (clone $this->customersQuery)->select('id')->get()->pluck('id')->toArray();
        $this->newOrdersQuery = NewOrder::query()->whereIn('customer_id', $customerIds)->has('amortization')->with(['amortization', 'latestAmortizationNotPayed', 'latestAmortizationPayed', 'customer']);
    }
    public function sheets(): array
    {
        return [
            new CustomerSheet($this->customersQuery),
            new CreditInformationSheet($this->newOrdersQuery),
        ];
    }
}
