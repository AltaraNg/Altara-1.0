<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class RenewalPrompterCustomerList implements FromCollection, WithMapping, WithHeadings, WithColumnFormatting, ShouldAutoSize
{
    use Exportable;

    public function __construct($newOrders)
    {
        $this->newOrders = $newOrders;
    }

    public function headings(): array
    {
        return [
            'Fullname',
            'Email',
            'Phone Number',
        ];
    }

    public function map($newOrder): array
    {
        return [
            $newOrder['full_name'] ?: "",
            $newOrder['email'] ?: "",
            $newOrder['phone_number'] ?: "",
        ];
    }

    public function collection()
    {
        return $this->newOrders;
    }

    public function columnFormats(): array
    {
        return [
            // 'F' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            // 'J' => NumberFormat::FORMAT_DATE_DDMMYYYY
        ];
    }
}
