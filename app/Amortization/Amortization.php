<?php


namespace App\Amortization;

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
        return (int)floor($this->repaymentDuration()/$this->repaymentCircle());
    }

    public function repaymentAmount(): float
    {

        return floor($this->order->repayment/$this->repaymentCount() / 100) * 100;
    }
    public function getDiscount(): array
    {
        return [];
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
        $reyAmount = $this->repaymentAmount();
        for ($i = 1; $i <= $this->repaymentCount(); $i++ ){
            $this->order->amortization()->create([
                'expected_payment_date' => $this->getRepaymentDate($i),
                'expected_amount' => $reyAmount
            ]);
        }
    }

    public function preview()
    {
        $plan = [];
        $reyAmount = $this->repaymentAmount();
        for ($i = 1; $i <= $this->repaymentCount(); $i++ ){
            $plan[] = [
                'expected_payment_date' => $this->getRepaymentDate($i)->toDateTimeString(),
                'expected_amount' => $reyAmount
            ];
        }
        return $plan;
    }
}
