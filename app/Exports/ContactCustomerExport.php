<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;


class ContactCustomerExport implements FromQuery, WithHeadings, WithMapping, WithColumnFormatting, ShouldAutoSize{
    use Exportable;
    public function __construct($customers){
        $this->customers = $customers;
    }

    public function query(){
        return $this->customers;
    }
    public function headings(): array
    {
        return [
            'Reg ID',
            'Phone',
            'Email',
            'Full Name',
            'Branch',
            'Date Added',
            'Customer Stage',
            'Employment Status',
            'Added By',
            'Updated At'

        ];
    }
    public function map($customer): array
    {
        return [
            $customer->reg_id,
            $customer->phone,
            $customer->email,
            $customer->name,
            $customer->branch->name,
            Date::dateTimeToExcel($customer->created_at),
            $customer->customerStage->name,
            $customer->employmentStatus->name,
            $customer->users->full_name,
            Date::dateTimeToExcel($customer->updated_at),
        ];
    }

    public function columnFormats(): array
    {
        return [
        'E' => NumberFormat::FORMAT_DATE_DDMMYYYY
        ];
    }
}
