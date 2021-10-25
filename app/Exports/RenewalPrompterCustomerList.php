<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class RenewalPrompterCustomerList implements FromCollection, WithMapping, WithHeadings, WithColumnFormatting, ShouldAutoSize
{
    use Exportable;

    private $renewalPrompterCustomers;

    public function __construct($renewalPrompterCustomers)
    {
        $this->renewalPrompterCustomers = $renewalPrompterCustomers;
    }

    public function headings(): array
    {
        return [
            'Full Name',
            'Email',
            'Phone Number',
        ];
    }

    public function map($row): array
    {
        return [
            $row['full_name'] ?: "",
            $row['email'] ?: "not available",
            $row['phone_number'] ?: "not available",
        ];
    }

    public function collection(): Collection
    {
        return $this->renewalPrompterCustomers;
    }

    public function columnFormats(): array
    {
        return [

        ];
    }
}
