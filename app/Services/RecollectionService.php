<?php

namespace App\Services;

use App\NewOrder;
use App\Recollection;
use App\Repositories\RecollectionRepository;
use Carbon\Carbon;
use Illuminate\Support\Str;

class RecollectionService
{
    private $recollectRepository;

    public function __construct(RecollectionRepository $recollectionRepository)
    {
        $this->recollectRepository = $recollectionRepository;
    }

    public function categoriseRecollection()
    {
        Recollection::truncate();
        $minDate = Carbon::now()->format('Y-m-d');
        NewOrder::whereHas('amortization', function ($query) use ($minDate) {
            $query->whereDate('expected_payment_date', '<', $minDate)
                ->where('actual_amount', '<', 1);
        })->chunk(100, function ($order) {
            foreach ($order as $data) {
                $expectedPaymentDate = $data->amortization->where('expected_payment_date', '<', now()->endOfDay())->where('actual_amount', '<', 1)->first()->expected_payment_date ?? null;
                if ($expectedPaymentDate) {
                    $todaysDate = Carbon::now();
                    $days = Carbon::parse($expectedPaymentDate)->diffInDays($todaysDate);
                    $bizType = Str::contains($data->businessType->slug, ['ac', 'cash_loan']);

                    $range = $bizType ? range(1, 15) : range(1, 30);
                    if (in_array($days, $range)) {
                        $this->storeOrUpdateRecollection($data, NewOrder::REM, $days);
                    }
                    $range = $bizType ? range(16, 30) : range(31, 45);
                    if (in_array($days, $range)) {
                        $this->storeOrUpdateRecollection($data, NewOrder::CRDBUR, $days);
                    }
                    $range = $bizType ? range(31, 45) : range(46, 75);
                    if (in_array($days, $range)) {
                        $this->storeOrUpdateRecollection($data, NewOrder::INTREPO, $days);
                    }
                    $range = $bizType ? 45 : 75;
                    if ($days > $range) {
                        $this->storeOrUpdateRecollection($data, NewOrder::EXTREPO, $days);
                    }
                } else {
                    continue;
                }
            }
        });
        return true;
    }

    private function storeOrUpdateRecollection($data, $status, $days)
    {
        $this->recollectRepository->updateOrCreate(new Recollection(), [
            'new_order_id' => $data->id,
        ],
            [
                'status' => $status,
                'number_of_days' => $days
            ]
        );
    }
}
