<?php


namespace App\Amortization;

use Illuminate\Support\Str;
use App\Discount;

abstract class Amortization
{
    public $order;

    /**
     * Amortization constructor.
     * @param $order
     */
    public function __construct($order)
    {
        $this->order = $order;
    }

    public function repaymentCount(): int
    {
        $result = $this->repaymentDuration() / $this->repaymentCircle();
        if ($result >= 24) {
            return 24;
        } else if ($result >= 18) {
            return 18;
        } else if ($result >= 12) {
            return 12;
        } else if ($result >= 9) {

            return 9;
        } else if ($result >= 6) {
            return 6;
        }
        return 3;
    }


    public function repaymentAmount(): float
    {
        return round($this->order->repayment / $this->repaymentCount() / 100) * 100;
    }

    public function repaymentAmountSuperLoan(float $percentage = 0.0)
    {
        return floor((($percentage  / 100) *  $this->order->repayment) / 100) * 100;
    }

    public function repaymentDuration(): int
    {
        return $this->order->repaymentDuration->value;
    }

    public function repaymentCircle(): int
    {
        return $this->order->repaymentCycle->value;
    }

    /**
     * @param int $count
     */
    public abstract function getRepaymentDate(int $count);

    public function create()
    {
        $plans =  $this->preview();
        foreach ($plans as $key => $plan) {
            $this->order->amortization()->create([
                'expected_payment_date' => $plan['expected_payment_date'],
                'expected_amount' => $plan['expected_amount'],
            ]);
        }
    }

    public function preview()
    {
        $IsSuperLoan = Str::contains($this->order->businessType->slug, 'super');
        if ($IsSuperLoan && env('USE_SUPER_LOAN_CALC')) {
            return $this->getSuperLoaPaymentPlans();
        } else {
            return $this->getNormalPaymentPlans();
        }
    }

    private function superLoanPercentages()
    {
        return [7.72, 2.98, 1.80];
    }
    private function getSuperLoaPaymentPlans()
    {
        $plan = [];
        $percentages = $this->superLoanPercentages();
        //loop through all the percentage
        foreach ($percentages as $key => $percentage) {
            //calculate repayment base on the current percentage
            for ($i = 1; $i <= $this->repaymentCount() / count($percentages); $i++) {
                $plan[] = [
                    'expected_payment_date' => $this->getRepaymentDate($i)->toDateTimeString(),
                    'expected_amount' => $this->repaymentAmountSuperLoan($percentage),
                ];
            }
        }
        return $plan;
    }
    private function getNormalPaymentPlans()
    {
        $plan = [];
        $reyAmount = $this->repaymentAmount();
        for ($i = 1; $i <= $this->repaymentCount(); $i++) {
            $plan[] = [
                'expected_payment_date' => $this->getRepaymentDate($i)->toDateTimeString(),
                'expected_amount' => $reyAmount
            ];
        }
        return $plan;
    }
}
