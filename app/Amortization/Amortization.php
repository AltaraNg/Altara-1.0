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
        // TODO: Implement duration() method.
        return 180;
    }

    public function repaymentCircle(): int
    {
        // TODO: Implement circle() method.
        return 28;
    }

    public function deficit(): float
    {
        // TODO: Implement circle() method.
        return 25000;
    }

    /**
     * @param int $count
     */
    public abstract function getRepaymentDate(int $count);

    public function create()
    {
        for ($i = 1; $i <= $this->repaymentCount(); $i++ ){
            dump($this->getRepaymentDate($i));
            dump($this->repaymentCount());
            dump($this->repaymentAmount());
            dump('...........................................');
        }
    }
}
