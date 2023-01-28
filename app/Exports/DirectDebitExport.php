<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;

class DirectDebitExport implements FromArray, WithHeadings
{
    use Exportable;

    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function array(): array
    {
        return $this->data;
    }

    public function headings(): array
    {
        return ['ID', 'Customer Name', 'Branch', 'Order Number', 'Order Date', 'Business Type', 'Amount', 'Bank', 'Status', 'Gateway Response'];
    }
}