<?php

namespace App\Contracts;

use App\Amortization;

interface PaymentGatewayInterface
{
    public function charge(Amortization $amortization);
}
