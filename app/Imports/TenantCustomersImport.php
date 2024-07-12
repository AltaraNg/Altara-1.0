<?php

namespace App\Imports;

use App\Models\Tenant;
use App\Repositories\NewOrderRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\SkipsUnknownSheets;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;


class TenantCustomersImport implements WithMultipleSheets, SkipsUnknownSheets
{
    use WithConditionalSheets;

    public Tenant $tenant;
    public string $employee_id;
    public NewOrderRepository $newOrderRepository;
    public function __construct(Tenant $tenant, string $employee_id, NewOrderRepository $newOrderRepository)
    {
        $this->tenant = $tenant;
        $this->employee_id = $employee_id;
        $this->newOrderRepository = $newOrderRepository;
    }

    public function sheets(): array
    {
        return [
            'Customers' => new TenantCustomerSheetImport($this->tenant, $this->employee_id, $this->newOrderRepository),
        ];
    }

    public function onUnknownSheet($sheetName)
    {
        info("Sheet {$sheetName} was skipped");
    }

    public function conditionalSheets(): array
    {
        return [
            'Customers' => new TenantCustomerSheetImport($this->tenant, $this->employee_id, $this->newOrderRepository),
        ];
    }
}
