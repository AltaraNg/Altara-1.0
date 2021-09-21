<?php


namespace App\Http\Filters;


class ProspectActivityFilter extends BaseFilter
{
    public function customer(int $customer_id)
    {
        $this->builder->where('contact_customer_id', $customer_id);

    }
}
