<?php

namespace App\Http\Filters;

use App\Http\Filters\BaseFilter;

class ClientCustomerCollectionFilter extends BaseFilter
{

    public function tenant($tenant_id)
    {
        $this->builder->where('tenant_id', $tenant_id);
    }

    public function status($status)
    {
        $this->builder->where('status', $status);
    }

}
