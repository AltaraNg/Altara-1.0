<?php

namespace App\Http\Filters;

class CustomerFilter extends BaseFilter
{
    public function custom_customer_id($custom_customer_id)
    {
        $this->builder->where('custom_customer_id', $custom_customer_id);
    }

    public function telephone($phone)
    {
        $this->builder->where('telephone', $phone);
    }

    public function name($name)
    {
        $this->builder->where('first_name', 'like', '%' . $name . '%')
            ->orWhere('middle_name', 'like', '%' . $name . '%')
            ->orWhere('last_name', 'like', '%' . $name . '%');
    }
}
