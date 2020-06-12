<?php


namespace App\Amortization;

abstract class Amortization
{
    private $order;

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
        return $this->deficit()/$this->repaymentCount();
    }

    public function repaymentDuration(): int
    {
        return $this->order->repaymentDuration->value;
    }

    public function repaymentCircle(): int
    {
        return $this->order->repaymentCycle->value;
    }

    public function deficit(): float
    {
        return $this->order->product_price - $this->order->down_payment;
    }

    /**
     * @param int $count
     */
    public abstract function getRepaymentDate(int $count);

    public function create()
    {
        $reyAmount = $this->repaymentAmount();
        for ($i = 1; $i <= $this->repaymentCount(); $i++ ){
            $this->order->amortization()->updateOrCreate([
                'expected_payment_date' => $this->getRepaymentDate($i),
                'expected_amount' => $reyAmount
            ]);
            dump($this->getRepaymentDate($i));
            dump($this->repaymentCount());
            dump($this->repaymentAmount());
            dump('...........................................');
        }
    }
}
