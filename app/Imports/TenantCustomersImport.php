<?php

namespace App\Imports;

use App\Models\Tenant;
use App\Repositories\NewOrderRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\SkipsUnknownSheets;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;


class TenantCustomersImport implements WithMultipleSheets, SkipsUnknownSheets, WithChunkReading
{
    use WithConditionalSheets;

    public Tenant $tenant;
    public string $employee_id;
    public bool $isValidation;
    public ?int $clientCustomerCollection;

    public function __construct(Tenant $tenant, string $employee_id, $isValidation, ?int $clientCustomerCollection = null)
    {
        $this->tenant = $tenant;
        $this->employee_id = $employee_id;
        $this->isValidation = $isValidation;
        $this->clientCustomerCollection = $clientCustomerCollection;
    }


    public function makeTenantCustomerSheetImport()
    {
        return new TenantCustomerSheetImport($this->tenant, $this->employee_id, $this->isValidation, $this->clientCustomerCollection);
    }

    public function sheets(): array
    {
        return [
            'Customers' => $this->makeTenantCustomerSheetImport(),
        ];
    }

    public function onUnknownSheet($sheetName)
    {
        info("Sheet {$sheetName} was skipped");
    }

    public function conditionalSheets(): array
    {
        return [
            'Customers' => $this->makeTenantCustomerSheetImport(),
        ];
    }

    public function chunkSize(): int
    {
        return 100;
    }
}
