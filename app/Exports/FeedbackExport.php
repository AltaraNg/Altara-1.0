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


class FeedbackExport implements FromQuery, WithHeadings, WithMapping, WithColumnFormatting, ShouldAutoSize{
    use Exportable;
    public function __construct($feedbacks){
        $this->feedbacks = $feedbacks;
    }

    public function query(){
        return $this->feedbacks;
    }
    public function headings(): array
    {
        return [
            'Customer',
            'Reason',
            'Notes',
            'DSA',
            'Date Added',

        ];
    }
    public function map($feedback): array
    {
        return [
            $feedback->customer->name,
            $feedback->reason->reason,
            $feedback->notes,
            $feedback->user->full_name,
            Date::dateTimeToExcel($feedback->created_at),
        ];
    }

    public function columnFormats(): array
    {
        return [
        'E' => NumberFormat::FORMAT_DATE_DDMMYYYY
        ];
    }
}
