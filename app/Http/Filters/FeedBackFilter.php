<?php


namespace App\Http\Filters;


class FeedBackFilter extends BaseFilter
{
    public function user(string $user_id)
    {
        $this->builder->where('user_id', $user_id);
    }

    public function customer(string $customer_name)
    {
        $this->builder->whereHas('customer', function($query) use ($customer_name){
            $query->where('name', 'like', '%'.$customer_name.'%');
        });
    }

    public function reason(string $reason_id)
    {
        $this->builder->where('reason_id', $reason_id);
    }
}
