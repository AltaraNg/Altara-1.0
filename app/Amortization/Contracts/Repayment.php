<?php


namespace App\Amortization\Contracts;


interface Repayment{
    public function repaymentDuration(): int;
    public function repaymentCircle(): int;
}
