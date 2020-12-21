<?php

namespace App\Imports;

use App\BusinessType;
use App\DownPaymentRate;
use App\Helper\LogHelper;
use App\PriceCalculator;
use App\RepaymentDuration;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CalculatorImport implements ToCollection, WithHeadingRow
{
    /**
     * @inheritDoc
     */
    public function collection(Collection $collection)
    {
        foreach ($collection as $row) {
            try {
                PriceCalculator::updateOrCreate([
                    'label' => $row['label'],
                ], [
                    'business_type_id' => BusinessType::where('name', $row['business_type'])->first()->id,
                    'down_payment_rate_id' => DownPaymentRate::where('percent', $row['down_payment_rate'])->first()->id,
                    'repayment_duration_id' => RepaymentDuration::where('name', $row['repayment_duration'])->first()->id,
                    'margin' => $row['margin'],
                    'interest' => $row['interest'],
                    'tax' => $row['tax'],
                    'status' => $row['status']
                ]);
            }catch (\Exception $exception) {
                LogHelper::sendErrorMail("Error Ocurred while Importing", $exception);
            }
        }
    }
}
