<?php


namespace App\Amortization;

use App\Models\RepaymentCycle;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use mysql_xdevapi\XSession;

abstract class Amortization
{
    public $order;

    private const FACTORS = [2, 1.5, 0.5, 0];
    private const INTEREST = 3.5;

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

    public function getDecliningRepaymentAmount(float $repaymentAmount, float $interestOnNormalSinglePayment, float $percentage = 0.0): float
    {
        if ($percentage <= 0) {
            return $interestOnNormalSinglePayment;
        }
        return (($percentage / 100) * $repaymentAmount) + $interestOnNormalSinglePayment;

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
        $IsRental = Str::contains($this->order->businessType->slug, 'rentals');

        if ($IsSuperLoan && env('USE_SUPER_LOAN_CALC')) {
//            return $this->getSuperLoaPaymentPlans();
            return $this->getDecliningPaymentPlansVersion2();
        } else if ($this->order->fixed_repayment === false || $IsRental) {
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

    private function bnpl40PercentPercentage()
    {
        return [25, 12.5, 12.5];
    }

    //** Percentage is gotten by  (repayment/total * 100) */
    private function nobsRenewalPercentages()
    {
        return [13.85, 11.01, 5.18, 2.20];
    }

    public function decliningPaymentPercentages($relativePercentage): Collection
    {
        return collect(self::FACTORS)->map(fn($factor) => $factor * $relativePercentage * 100);
    }

    private function getSuperLoaPaymentPlans()
    {
        $isBimonthly = RepaymentCycle::find($this->order->repayment_cycle_id)->name == RepaymentCycle::BIMONTHLY;
        $plan = [];
        $percentages = $this->superLoanPercentages();
        $repaymentCount = $isBimonthly ? $this->repaymentCount() : $this->repaymentCount() * 2;

        $currentPlanIndex = 1;
        //loop through all the percentage
        foreach ($percentages as $key => $percentage) {
            if ($key == 0) {
                $i = $currentPlanIndex;
                $constraint = $repaymentCount / count($percentages);
            } else {
                $i = $currentPlanIndex + 1;
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

    private function getDecliningPaymentPlans()
    {
        $IsNoBsRenewalLoan = Str::containsAll($this->order->businessType->slug, ['renewal', 'no_bs']);
        $is3MonthsDuration = $this->order->repaymentDuration->name == "three_months";
        $useBNPLPercentage = $this->order->financed_by == "altara-bnpl";
        $isBimonthly = RepaymentCycle::find($this->order->repayment_cycle_id)->name == RepaymentCycle::BIMONTHLY;
        $repaymentCount = $isBimonthly ? $this->repaymentCount() : $this->repaymentCount() * 2;


        $plan = [];
        if ($useBNPLPercentage || $is3MonthsDuration) {
            $percentages = $this->bnpl40PercentPercentage();
        } else if ($IsNoBsRenewalLoan) {
            $percentages = $this->nobsRenewalPercentages();
        } else {
            $percentages = $this->nobsNewPercentages();
        }
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

    private function getDecliningPaymentPlansVersion2(): array
    {
        $IsNoBsRenewalLoan = Str::containsAll($this->order->businessType->slug, ['renewal', 'no_bs']);
        $is3MonthsDuration = $this->order->repaymentDuration->name == "three_months";
        $useBNPLPercentage = $this->order->financed_by == "altara-bnpl";
        $isBimonthly = RepaymentCycle::find($this->order->repayment_cycle_id)->name == RepaymentCycle::BIMONTHLY;
        $repaymentCount = $isBimonthly ? $this->repaymentCount() : $this->repaymentCount() * 2;

        $repaymentAmount = $this->order->repayment;
        $normalInstallment = $repaymentAmount / $repaymentCount;

        $plan = [];
        if ($useBNPLPercentage || $is3MonthsDuration) {
            $percentages = $this->bnpl40PercentPercentage();
        } else {
            $relativePercentage = $this->getRelativePercentage($normalInstallment, $repaymentAmount);
            $percentages = $this->decliningPaymentPercentages($relativePercentage);
        }
        $interestOnNormalSingleRepayment = (self::INTEREST / 100) * $repaymentAmount;
        $plan = $this->generateDecliningRepayments($percentages, $repaymentCount ,$repaymentAmount, $interestOnNormalSingleRepayment);

        if (!$isBimonthly) {
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
        }
        return $plan;
    }

    private function generateDecliningRepayments($percentages, $repaymentCount, $repaymentAmount,$interestOnNormalSingleRepayment): array
    {
        $percentagesToArray = $percentages->toArray();
        $currentPlanIndex = 1;
        $repayments = [];
        foreach ($percentagesToArray as $key => $percentage) {
            if ($key == 0) {
                $index = $currentPlanIndex;
                $constraint = $repaymentCount / ($percentages->count() - 1);
            } else {
                // we want to make sure our for loop restarts with the next index as starting point
                $index = $currentPlanIndex + 1;
                //we increment our constraint as we have incremented index
                $constraint = $currentPlanIndex + ($repaymentCount / ($percentages->count() - 1));
            }

            while ($index < $constraint) {
                $repayments[] = [
                    'expected_payment_date' => $this->getRepaymentDate($index)->toDateTimeString(),
                    'expected_amount' => round($this->getDecliningRepaymentAmount($repaymentAmount, $interestOnNormalSingleRepayment, $percentage), 2),
                ];
                $index++;
                //if we are in the last index of the current iteration
                if ($index == $constraint) {
                    //save it as our current index for next for each
                    $currentPlanIndex = $index;
                }
            }
        }
        return $repayments;
    }

    private function getNormalPaymentPlans(): array
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

    public function getRelativePercentage(float $normalInstallment, float $residual): float
    {
        return $normalInstallment / $residual;
    }
}
