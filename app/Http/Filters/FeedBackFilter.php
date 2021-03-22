<?php


namespace App\Http\Filters;


class FeedBackFilter extends BaseFilter
{
    public function user(string $user_id)
    {
        $this->builder->where('user_id', $user_id);
    }

    public function customer(string $customer_id)
    {
        $this->builder->where('customer_id', $customer_id);
    }

    public function reason(string $reason_id)
    {
        $this->builder->where('reason_id', $reason_id);
    }
}
