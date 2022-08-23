<?php

namespace App\Exports\Sheets;

use App\Customer;
use Carbon\Carbon;
use Generator;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromGenerator;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithCustomChunkSize;
use Maatwebsite\Excel\Concerns\WithLimit;
class CustomerSheet implements FromGenerator, WithHeadings, WithMapping, WithTitle, ShouldAutoSize, WithLimit, WithCustomChunkSize
{
    use Exportable;

    private $customers;
    public function __construct($customers)
    {
        $this->customers = $customers;
    }
    public function title(): string
    {
        return 'Individual Borrowers';
    }
  
    public function generator(): Generator
    {
        return $this->customers->cursor();
    }

    public function map($customer): array
    {
        try {
            $dateOfBirth  = Carbon::parse($customer->date_of_birth)->format('d/m/Y');
        } catch (\Throwable $th) {
            $dateOfBirth = 'N/A';
        }

        return [
            $customer->id,  // 'CustomerID',
            $customer->branch_id,   // 'Branch Code',
            $customer->last_name,   // 'Surname',
            $customer->first_name,  // 'First name',
            $customer->middle_name, // 'Middle name',
            $dateOfBirth,   // 'Date of Birth',
            'N/A', // 'National Identity Number',
            'N/A', // 'Drivers License No',
            $customer->bvn_no ?? 'N/A', // 'BVN No',
            $customer->passport_no ?? 'N/A', // 'Passport No',
            $customer->gender, // 'Gender',
            'NG',   // 'Nationality',
            $customer->civil_status,    // 'Marital Status',
            (string)$customer->telephone,   // 'Mobile number',
            $customer->add_addinfo_description,    // 'Primary Address Line 1',
            $customer->add_street, // 'Primary Address Line 2',
            $customer->city,    // 'Primary city/LGA',
            $customer->state,   // 'Primary State',
            'NG',  // 'Primary Country',
            $this->employmentStatus($customer->employment_status), // 'Employment Status',
            $customer->occupation ?? '8',  // 'Occupation', TODO
            'N/A',  // 'Business Category',
            'N/A',  // 'Business Sector',
            'Individual', //'Borrower Type',
            'N/A',  // 'Other ID',
            'N/A', // 'Tax ID',
            'N/A',  // 'Picture File Path',
            $customer->email,    // 'E-mail address',
            $customer->name_of_company_or_business,  // 'Employer Name',
            $customer->cadd_addinfo,    // 'Employer Address Line 1',
            $customer->cadd_addinfo,    // 'Employer Address Line 2',
            $customer->company_city,    // 'Employer City',
            $customer->company_state,    // 'Employer State',
            'NG',   // 'Employer Country',
            'N/A', // 'Title',
            'N/A', // 'Place of Birth',
            $customer->company_telno ?? 'N/A', // 'Work phone',
            'N/A',  // 'Home phone',
            'N/A',  // 'Secondary Address Line 1',
            'N/A',  // 'Secondary Address Line 2',
            'N/A',  // 'Secondary Address City/LGA',
            'N/A',  // 'Secondary Address State',
            'N/A',  // 'Secondary Address Country',
            'N/A', // 'Spouse\'s Surname',
            'N/A', // 'Spouse\'s First name',
            'N/A', // 'Spouse\'s Middle name ',
        ];
    }

    public function headings(): array
    {
        return [
            'CustomerID',
            'Branch Code',
            'Surname',
            'First name',
            'Middle name',
            'Date of Birth',
            'National Identity Number',
            'Drivers License No',
            'BVN No',
            'Passport No',
            'Gender',
            'Nationality',
            'Marital Status',
            'Mobile number',
            'Primary Address Line 1',
            'Primary Address Line 2',
            'Primary city/LGA',
            'Primary State',
            'Primary Country',
            'Employment Status',
            'Occupation',
            'Business Category',
            'Business Sector',
            'Borrower Type',
            'Other ID',
            'Tax ID',
            'Picture File Path',
            'E-mail address',
            'Employer Name',
            'Employer Address Line 1',
            'Employer Address Line 2',
            'Employer City',
            'Employer State',
            'Employer Country',
            'Title',
            'Place of Birth',
            'Work phone',
            'Home phone',
            'Secondary Address Line 1',
            'Secondary Address Line 2',
            'Secondary Address City/LGA',
            'Secondary Address State',
            'Secondary Address Country',
            'Spouse\'s Surname',
            'Spouse\'s First name',
            'Spouse\'s Middle name ',
        ];
    }

    private function employmentStatus($data)
    {
        $status = 'UE';
        if ($data == 'formal') {
            $status = 'E'; //employed
        }
        if ($data == 'informal(business)') {
            $status = "SE"; //self employed
        }
        return $status;
    }

    public function limit(): int
    {
        return 500;
    }

    public function chunkSize(): int
    {
        return 500;
    }
}
