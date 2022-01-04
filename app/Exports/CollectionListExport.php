<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;

class CollectionListExport implements FromCollection, WithMapping,  WithHeadings, WithColumnFormatting, ShouldAutoSize
{
    use Exportable;
    public function __construct($collectionList)
    {
        $this->collectionList = $collectionList;
    }

    public function headings(): array
    {
        return [
            'ORDER ID',
            'Phone',
            'Email',
            'Full Name',
            'Showroom',
            'Date Purchased',
            'Amount Owed',
            'Amount Paid',
        ];
    }
    public function map($collectionList): array
    {
        return [
          $collectionList['order_number'],
          $collectionList['phone_number'],
          $collectionList['email'],
          $collectionList['full_name'],
          $collectionList['showroom'],
          $collectionList['date_purchased'],
          $collectionList['amount_of_payment_due'],
          $collectionList['amount_of_payments_made'],
        ];
    }

    public function collection()
    {
        return $this->collectionList;
    }

    public function columnFormats(): array
    {
        return [
            // 'F' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            // 'J' => NumberFormat::FORMAT_DATE_DDMMYYYY
        ];
    }
}
