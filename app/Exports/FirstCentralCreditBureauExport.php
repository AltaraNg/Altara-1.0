<?php

namespace App\Exports;

use App\Customer;
use App\Exports\Sheets\CreditInformationSheet;
use App\Exports\Sheets\CustomerSheet;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class FirstCentralCreditBureauExport implements WithMultipleSheets
{
    use Exportable;
    private $customersQuery;
    private $newOrdersQuery;
    public function __construct($customersQuery, $newOrdersQuery)
    {
        $this->newOrdersQuery = $newOrdersQuery;
        $this->customersQuery = $customersQuery;
    }
    public function sheets(): array
    {
        set_time_limit(100);
        return [
            new CustomerSheet($this->customersQuery),
            new CreditInformationSheet($this->newOrdersQuery),
        ];
    }
}
