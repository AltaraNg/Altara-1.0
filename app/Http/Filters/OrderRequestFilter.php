<?php

namespace App\Http\Filters;

class OrderRequestFilter extends BaseFilter
{
    /**
     * @param string $name
     */
    public function orderType(string $order_type)
    {
        $this->builder->where('order_type', $order_type);
    }
    /**
     * @param string $status
     */
    public function status(string $status)
    {
        $this->builder->where('status', $status);
    }
    /**
     * @param string $telephone
     */
    public function phoneNumber(string $telephone)
    {
        $this->builder->whereHas('customer', function ($builder) use ($telephone) {
            $builder->where('telephone', $telephone);
        });
    }
}
