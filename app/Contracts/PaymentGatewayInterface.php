<?php

namespace App\Contracts;

use App\Models\Amortization;

interface PaymentGatewayInterface
{
    public function charge(Amortization $amortization);
}
