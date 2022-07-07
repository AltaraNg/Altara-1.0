<?php

namespace App\Exports\Sheets;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithProperties;
use Maatwebsite\Excel\Concerns\WithTitle;

class CreditInformationSheet implements FromQuery, WithHeadings, WithMapping, WithTitle, ShouldAutoSize
{
    use Exportable;

    private $orders;
    public function __construct($orders)
    {
        $this->orders = $orders;
    }
    public function title(): string
    {
        return 'Credit Information';
    }
    public function query()
    {
        return $this->orders;
    }

    public function map($order): array
    {
        // dd(  $order->amortization[$order->amortization->count() - 1]);
        $lastNonePaymentDate = null;
        $lastPaymentDate = null;
        $days_in_arrears = 0;
        if ($order->latestAmortizationPayed) {
            $lastPaymentDate  = $order->latestAmortizationPayed->actual_payment_date;
        }
        if ($order->latestAmortizationNotPayed) {
            $lastNonePaymentDate = $order->latestAmortizationNotPayed->expected_payment_date;
        }

        if ($lastNonePaymentDate && $lastPaymentDate) {
            $days_in_arrears = Carbon::parse($lastNonePaymentDate)->diffInDays(Carbon::parse($lastPaymentDate));
        }

        // $callback = function ($query) {
        //     $query
        //         ->where('expected_payment_date', '<', Carbon::now()->endOfDay())
        //         ->where('actual_payment_date',  null)
        //         ->where('actual_amount', '<', 1);
        // };
        return [
            $order->customer->id, // 'Customer ID',
            $order->customer->id, // 'Account Number',
            '001', // 'Account Status',
            'N/A', // 'Account status date',
            $order->order_date, // 'Date of loan (facility) disbursement/Loan effective date',
            $order->product_price,   // 'Credit limit/Facility amount/Global limit',
            $order->product_price, // 'Loan (Facility) Amount/Availed Limit',
            $this->outstandingBalance(clone $order) ?? '0',  // 'Outstanding balance',
            $order->amortization[0]->expected_amount,    // 'Instalment amount',
            'NGN',  // 'Currency',
            $days_in_arrears ?? '0', // 'Days in arrears',
            $this->overdueAmount(clone $order) ?? '0', // 'Overdue amount',
            'personal', // 'Loan (Facility) type',
            $order->repaymentDuration->value, // 'Loan (Facility) Tenor',
            $order->repaymentCycle->name,   // 'Repayment frequency',
            $order->latestAmortizationPayed->actual_payment_date ?? '',   // 'Last payment date',
            $order->latestAmortizationPayed->actual_amount ?? '', // 'Last payment amount',
            $order->amortization[$order->amortization->count() - 1]->expected_payment_date, // 'Maturity date',
            'N/A', // 'Loan Classification', //ASK cat 1
            $order->customer->civil_status, // 'Marital Status',
            'N/A', // 'Spouse\'s Name',
            'N/A', // 'Legal Challenge Status ',
            'N/A', // 'Litigation Date',
            'N/A', // 'Consent Status',
            'N/A', // 'Loan Security Status',
            NULL,   // 'Collateral Type',
            NULL,   // 'Collateral Details',
            NULL,   // 'Previous Account number',
            NULL,   // 'Previous Name',
            NULL,   // 'Previous Customer ID',
            NULL,   // 'Previous Branch code'
        ];
    }

    public function headings(): array
    {
        return [
            'Customer ID',
            'Account Number',
            'Account Status',
            'Account status date',
            'Date of loan (facility) disbursement/Loan effective date',
            'Credit limit/Facility amount/Global limit',
            'Loan (Facility) Amount/Availed Limit',
            'Outstanding balance',
            'Instalment amount',
            'Currency',
            'Days in arrears',
            'Overdue amount',
            'Loan (Facility) type',
            'Loan (Facility) Tenor',
            'Repayment frequency',
            'Last payment date',
            'Last payment amount',
            'Maturity date',
            'Loan Classification',
            'Marital Status',
            'Spouse\'s Name',
            'Legal Challenge Status ',
            'Litigation Date',
            'Consent Status',
            'Loan Security Status',
            'Collateral Type',
            'Collateral Details',
            'Previous Account number',
            'Previous Name',
            'Previous Customer ID',
            'Previous Branch code'
        ];
    }

    private function outstandingBalance($order)
    {
        return  $order->amortization->where('actual_payment_date',  null)->where('actual_amount', '<', 1)->sum('expected_amount');
    }
    private function overdueAmount($order)
    {
        return $order->amortization->where('expected_payment_date', '<', Carbon::now()->endOfDay())
            ->where('actual_payment_date',  null)
            ->where('actual_amount', '<', 1)->sum('expected_amount');
    }

    // public function repaymentDuration(string $duration)
    // {
    //     if ($duration == 'three_months') {
    //         return 'Quarterly';
    //     }
    //     if ($duration == 'six_months') {
    //         return '6 Months';
    //     }
    //     if ($duration == 'nine_months') {
    //         return '9 Months';
    //     }

    //     if ($duration == 'twelve_months') {
    //         return 'Yearly';
    //     }
    //     return 'N/A';
    //     // 1	Weekly
    //     // 2	Forthnightly
    //     // 3	Monthly
    //     // 4	Quarterly
    //     // 5	6 Months
    //     // 6	Yearly
    //     // 7	Bullet

    // }
}
