<?php


namespace App\Amortization;

use Illuminate\Support\Str;
use App\Discount;
use App\RepaymentCycle;

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
        $amount = floor((($percentage / 100) * $this->order->repayment) / 100) * 100;
        return $amount;
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
        $plans = $this->preview();
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
        $IsProduct = Str::contains($this->order->businessType->slug, 'product');

        if ($IsSuperLoan && env('USE_SUPER_LOAN_CALC')) {
            return $this->getSuperLoaPaymentPlans();
        } else if ($this->order->fixed_repayment === false && !$IsProduct) {
            return $this->getDecliningPaymentPlans();
        } else {
            return $this->getNormalPaymentPlans();
        }
    }


    //** Percentage is gotten by  (repayment/total * 100) */

    private function superLoanPercentages()
    {
        return [7.72, 2.98, 1.80];
    }

    //** Percentage is gotten by  (repayment/total * 100) */

    private function nobsNewPercentages()
    {
        return [13.65, 10.82, 5.20, 2.42];
    }

    //** Percentage is gotten by  (repayment/total * 100) */
    private function nobsRenewalPercentages()
    {
        return [13.85, 11.01, 5.18, 2.20];
    }
    private function getSuperLoaPaymentPlans()
    {
        $plan = [];
        $percentages = $this->superLoanPercentages();
        $currentPlanIndex = 1;
        //loop through all the percentage
        foreach ($percentages as $key => $percentage) {
            if ($key == 0) {
                $i = $currentPlanIndex;
                $constraint = $this->repaymentCount() / count($percentages);
            } else {
                $i = $currentPlanIndex + 1;
                $constraint = $currentPlanIndex + $this->repaymentCount() / count($percentages);
            }
            //calculate repayment base on the current percentage
            for ($i; $i <= $constraint; $i++) {

                $plan[] = [
                    'expected_payment_date' => $this->getRepaymentDate($i)->toDateTimeString(),
                    'expected_amount' => $this->repaymentAmountSuperLoan($percentage),
                ];
                //if we are in the last index of the current iteration
                if ($i == $constraint) {
                    //save it as our current index for next for each
                    $currentPlanIndex = $i;
                }
            }
        }
        return $plan;
    }
    private function getDecliningPaymentPlans()
    {

        $IsNoBsRenewalLoan = Str::containsAll($this->order->businessType->slug, ['renewal', 'no_bs']);
        $isBimonthly = RepaymentCycle::find($this->order->repayment_cycle_id)->name == RepaymentCycle::BIMONTHLY;
        $repaymentCount = $isBimonthly ? $this->repaymentCount() : $this->repaymentCount() * 2;
        $plan = [];
        $percentages = $IsNoBsRenewalLoan ? $this->nobsRenewalPercentages() : $this->nobsNewPercentages();
        $currentPlanIndex = 1;
        //loop through all the percentage
        foreach ($percentages as $key => $percentage) {
            if ($key == 0) {
                $i = $currentPlanIndex;
                $constraint = $repaymentCount / count($percentages);
            } else {
                // we want to make sure our for loop restarts with the next index as starting point
                $i = $currentPlanIndex + 1;
                //we increment our constraint we have incremented i
                $constraint = $currentPlanIndex + $repaymentCount / count($percentages);
            }
            //calculate repayment base on the current percentage
            for ($i; $i <= $constraint; $i++) {
                $plan[] = [
                    'expected_payment_date' => $this->getRepaymentDate($i)->toDateTimeString(),
                    'expected_amount' => $this->repaymentAmountSuperLoan($percentage),
                ];
                //if we are in the last index of the current iteration
                if ($i == $constraint) {
                    //save it as our current index for next for each
                    $currentPlanIndex = $i;
                }
            }
        }
        if ($isBimonthly) {
            return $plan;
        } else {
            $bimonthly = [];
            $dates = [];
            foreach ($plan as $p) {
                $bimonthly[] = $p['expected_amount'];
                $dates[] = $p['expected_payment_date'];
            }
            $monthly = [];
            for ($i = 0; $i < count($bimonthly); $i += 2) {
                $monthly[] = $bimonthly[$i] + $bimonthly[$i + 1];
            }
            $plan = [];
            for ($i = 0; $i < count($monthly); $i += 1) {
                $plan[] = [
                    'expected_payment_date' => $dates[$i],
                    'expected_amount' => $monthly[$i]
                ];
            }
            return $plan;

        }




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