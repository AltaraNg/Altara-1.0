<?php


namespace App\Amortization;

use App\Exceptions\AException;
use App\Models\Inventory;
use App\Models\PriceCalculator;
use App\Models\RepaymentCycle;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

abstract class Amortization
{
    public $order;

    private const FACTORS = [2, 1.5, 0.5, 0];

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

    public function getPriceCalculator(): Model|Builder|null
    {
        return PriceCalculator::query()
            ->where('business_type_id', $this->order->businessType->id)
            ->where('down_payment_rate_id', $this->order->downPaymentRate->id)
            ->where('repayment_duration_id', $this->order->repaymentDuration->id)
            ->first();
    }

    public function repaymentAmountSuperLoan(float $percentage = 0.0): float|int
    {
        $amount = floor((($percentage / 100) * $this->order->repayment) / 100) * 100;
        return $amount;
    }

    public function getDecliningRepaymentAmount(float $repaymentAmount, float $interestOnNormalSinglePayment, float $percentage = 0.0): float
    {
        if ($percentage <= 0) {
            $amount = $interestOnNormalSinglePayment;
        } else {
            $amount = (($percentage / 100) * $repaymentAmount) + $interestOnNormalSinglePayment;
        }
        return ceil($amount / 100) * 100;
    }

    public function repaymentDuration(): int
    {
        return $this->order->repaymentDuration->value;
    }

    public function getDiscountValue(): float
    {
        $discount = $this->order->discount;
        if ($discount) {
            return (float)$discount->percentage_discount;
        }
        return 0.0;
    }

    public function repaymentDurationName(): string
    {
        return $this->order->repaymentDuration->name;
    }


    public function repaymentCircle(): int
    {
        return $this->order->repaymentCycle->value;
    }

    public function repaymentCircleName(): string
    {
        return $this->order->repaymentCycle->name;
    }

    /**
     * @throws AException
     */
    public function getResidual(): float
    {
        $price = 0;

        if ($this->order->cost_price) {

            $price = $this->order->cost_price;

        } else {

            $inventory_id = $this->order->inventory_id;

            if ($inventory_id != null) {
                $inventory = Inventory::query()->where('id', $inventory_id)->first();
            } else {
                $inventory = $this->order->inventory;
            }
            if (!$inventory) {
                throw new AException("Could not find the supplied inventory");
            }

            $price = $inventory->price;
        }
        if ($this->order->down_payment > $price) {
            throw new AException("Calculation of residual failed, cost price must be higher than down payment");
        }
        // dd($this->order->down_payment);
        return (float)$price - $this->order->down_payment;
    }

    /**
     * @param int $count
     */
    public abstract function getRepaymentDate(int $count);

    public function create()
    {
        $plans = $this->preview();
        $data = [];
        foreach ($plans as $key => $plan) {
            //            $this->order->amortization()->create([
            //                'expected_payment_date' => $plan['expected_payment_date'],
            //                'expected_amount' => $plan['expected_amount'],
            //            ]);
            $data[] = [
                'expected_payment_date' => $plan['expected_payment_date'],
                'expected_amount' => $plan['expected_amount'],
                'created_at' => Carbon::now()->toDateString(),
                'updated_at' => Carbon::now()->toDateString(),
                'new_order_id' => $this->order->id
            ];
        }
        DB::table('amortizations')->insert($data);
    }

    public function preview()
    {
        $IsSuperLoan = Str::contains($this->order->businessType->slug, 'super');
        $IsRental = Str::contains($this->order->businessType->slug, 'rentals');
        $isSixMonth = $this->repaymentDurationName() == 'six_months';
        $repaymentCycleName = $this->repaymentCircleName();
        $useBNPLPercentage = $this->order->financed_by == "altara-bnpl";
        $isCollection = $this->order->businessType->slug == 'collection';


        if ($isCollection) {
            return $this->getCollectionRepaymentPlans();
        }
        if ($IsSuperLoan && env('USE_SUPER_LOAN_CALC') && !$isSixMonth) {
            return $this->getSuperLoaPaymentPlans();
        } else if ($useBNPLPercentage) {
            return $this->getDecliningPaymentPlans();
        } else if (!$this->order->fixed_repayment || $IsRental) {

            if (
                ($this->repaymentDurationName() == 'six_months' && $repaymentCycleName == 'bi_monthly') ||
                ($this->repaymentDurationName() == 'six_months' && $repaymentCycleName == 'custom')
            ) {
                return $this->getDecliningPaymentPlansForSixMonths();
            }

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
        return [26.94, 16.67, 6.39];
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

    public function applyDiscountOnDecliningRepayment(array $repayments, float $discount): array
    {
        return array_map(function ($repayment) use ($discount) {
            $repayment["expected_amount"] = $repayment["expected_amount"] - ($repayment["expected_amount"] * ($discount / 100));
            return $repayment;
        }, $repayments);
    }

    public function roundExpectedAmount(array $repayments, int $places): array
    {

        return array_map(function ($repayment) use ($places) {
            $repayment["expected_amount"] = round($repayment["expected_amount"], $places);
            return $repayment;
        }, $repayments);
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

    private function getDecliningPaymentPlansForSixMonths(): array
    {
        $IsNoBsRenewalLoan = Str::containsAll($this->order->businessType->slug, ['renewal', 'no_bs']);
        $is3MonthsDuration = $this->order->repaymentDuration->name == "three_months";
        $useBNPLPercentage = $this->order->financed_by == "altara-bnpl";
        $isBimonthly = RepaymentCycle::find($this->order->repayment_cycle_id)->name == RepaymentCycle::BIMONTHLY;
        $repaymentCount = $isBimonthly ? $this->repaymentCount() : $this->repaymentCount() * 2;
        $residual = $this->getResidual();
        $repaymentAmount = $this->order->repayment;
        $normalInstallment = $residual / $repaymentCount;
        $discountValue = $this->getDiscountValue();
        $priceCalculator = $this->getPriceCalculator();
        $plan = [];
        if ($useBNPLPercentage || $is3MonthsDuration) {

            $interestOnNormalSingleRepayment = ($priceCalculator->interest / 100) * $residual;
        } else {
            $relativePercentage = $this->getRelativePercentage($normalInstallment, $residual);
            $percentages = $this->decliningPaymentPercentages($relativePercentage);
            $interestOnNormalSingleRepayment = ($priceCalculator->interest / 100) * $residual;
        }


        $plan = $this->generateDecliningRepayments($percentages, $repaymentCount, $residual, $interestOnNormalSingleRepayment);

        if ($discountValue > 0) {
            $plan = $this->applyDiscountOnDecliningRepayment($plan, $discountValue);
        }

        if (!$isBimonthly) {
            $plan = $this->transformToMonthlyPayments($plan);
        }

        return $this->roundExpectedAmount($plan, 2);
    }

    private function getBnplPlans()
    {
        $percentages = $this->bnpl40PercentPercentage();
        $isBimonthly = RepaymentCycle::find($this->order->repayment_cycle_id)->name == RepaymentCycle::BIMONTHLY;
        $repaymentCount = $isBimonthly ? $this->repaymentCount() : $this->repaymentCount() * 2;
        $residual = $this->getResidual();
        $discountValue = $this->getDiscountValue();
        $plan = [];
        $orderCount = $this->order->customer->new_orders->count();
        if ($orderCount == 0) {
            $interest = 3.5;
        } else if ($orderCount == 1) {
            $interest = 3.0;
        } else {
            $interest = 2.75;
        }
        $interestOnNormalSingleRepayment = ($interest / 100) * $residual;
        $plan = $this->generateDecliningRepayments($percentages, $repaymentCount, $residual, $interestOnNormalSingleRepayment);

        if ($discountValue > 0) {
            $plan = $this->applyDiscountOnDecliningRepayment($plan, $discountValue);
        }

        if (!$isBimonthly) {
            $plan = $this->transformToMonthlyPayments($plan);
        }

        return $this->roundExpectedAmount($plan, 2);


    }

    public function transformToMonthlyPayments($repaymentArray): array
    {
        $monthlyPayments = [];

        $bimonthly = [];
        $dates = [];
        foreach ($repaymentArray as $p) {
            $bimonthly[] = $p['expected_amount'];
            $dates[] = $p['expected_payment_date'];
        }
        $monthly = [];
        for ($i = 0; $i < count($bimonthly); $i += 2) {
            $monthly[] = $bimonthly[$i] + $bimonthly[$i + 1];
        }

        for ($i = 0; $i < count($monthly); $i += 1) {
            $monthlyPayments[] = [
                'expected_payment_date' => $dates[$i],
                'expected_amount' => $monthly[$i]
            ];
        }

        return $monthlyPayments;
    }


    private function generateDecliningRepayments($percentages, $repaymentCount, $residual, $interestOnNormalSingleRepayment): array
    {
        $percentagesToArray = $percentages;
        $currentPlanIndex = 1;
        $repayments = [];

        foreach ($percentagesToArray as $key => $percentage) {
            if ($key == 0) {
                $index = $currentPlanIndex;
                $constraint = $repaymentCount / count($percentages);
            } else {
                // we want to make sure our for loop restarts with the next index as starting point
                $index = $currentPlanIndex + 1;
                //we increment our constraint as we have incremented index
                $constraint = $currentPlanIndex + ($repaymentCount / count($percentages));
            }

            while ($index <= $constraint) {

                $repayments[] = [
                    'expected_payment_date' => $this->getRepaymentDate($index)->toDateTimeString(),
                    'expected_amount' => $this->getDecliningRepaymentAmount($residual, $interestOnNormalSingleRepayment, $percentage),
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

    private function getCollectionRepaymentPlans(): array
    {
        $plan = [];
        $payments = [];
        $totalAmount = $this->order->repayment;
        $useFloat = is_float($totalAmount);

        if ($useFloat) {
            $basePayment = floor($totalAmount / $this->repaymentCount() * 100) / 100;
            $remainder = round(($totalAmount - ($basePayment * $this->repaymentCount())), 2);
        } else {
            $basePayment = intdiv($totalAmount, $this->repaymentCount());
            $remainder = $totalAmount % $this->repaymentCount();
        }


        for ($i = 1; $i <= $this->repaymentCount(); $i++) {
            if ($useFloat) {
                if ($i <= $remainder * 100) {
                    $plan[] = [
                        'expected_payment_date' => $this->getRepaymentDate($i)->toDateTimeString(),
                        'expected_amount' => $basePayment + 0.01
                    ];
                } else {
                    $plan[] = [
                        'expected_payment_date' => $this->getRepaymentDate($i)->toDateTimeString(),
                        'expected_amount' => $basePayment
                    ];
                }
            } else {
                if ($i <= $remainder) {
                    $plan[] = [
                        'expected_payment_date' => $this->getRepaymentDate($i)->toDateTimeString(),
                        'expected_amount' => $basePayment + 1
                    ];
                } else {
                    $plan[] = [
                        'expected_payment_date' => $this->getRepaymentDate($i)->toDateTimeString(),
                        'expected_amount' => $basePayment
                    ];
                }
            }
            $payments[] = $plan[$i - 1]['expected_amount'];
        }
        return $plan;
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
