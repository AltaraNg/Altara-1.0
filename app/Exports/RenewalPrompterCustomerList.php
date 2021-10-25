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

    public function map($renewalPrompterCustomer): array
    {
        return [
            $renewalPrompterCustomer['full_name'] ?: "",
            $renewalPrompterCustomer['email'] ?: "",
            $renewalPrompterCustomer['phone_number'] ?: "",
        ];
    }

    public function collection()
    {
        return $this->renewalPrompterCustomers;
    }

    public function columnFormats(): array
    {
        return [
            // 'F' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            // 'J' => NumberFormat::FORMAT_DATE_DDMMYYYY
        ];
    }
}
