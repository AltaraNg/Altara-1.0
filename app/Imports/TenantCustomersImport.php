<?php

namespace App\Imports;

use App\Models\Tenant;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\SkipsUnknownSheets;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;


class TenantCustomersImport implements WithMultipleSheets, SkipsUnknownSheets, WithChunkReading
{
    use WithConditionalSheets;

    public Tenant $tenant;
    public string $employee_id;
    private int $isValidation;
    public ?int $clientCustomerCollection;

    public function __construct(Tenant $tenant, string $employee_id, int $isValidation, ?int $clientCustomerCollection = null)
    {
        $this->tenant = $tenant;
        $this->employee_id = $employee_id;
        $this->isValidation = $isValidation;
        $this->clientCustomerCollection = $clientCustomerCollection;
    }


    public function makeTenantCustomerSheetImport()
    {
        Log::info("makeTenantCustomerSheetImport method: ".  $this->isValidation);
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
