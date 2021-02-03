<?php

namespace App\Services;

class CreditCheckService
{
    const LOANS = [40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000];
    const rate = 11.28;

    public function getLoans($data)
    {
        $temp = [];
        $result = [];
        foreach (self::LOANS as $loan) {
            foreach ($data as $month) {
                $point = $this->getPoints($loan, $month);
                $temp[$loan][] = $point;
            }

            $result[$loan] = min($temp[$loan]) >= 2 ? 'Approved' : 'Rejected';
        }
        return $result;
    }

    public function getPoints($loan, $monthRecord): int
    {
        $repayment = $loan / self::rate;
        $temp = 0;
        foreach ($monthRecord as $record) {
            if ($record >= $repayment) {
                $temp += 1;
            }
        }
        return $temp;
    }
}
