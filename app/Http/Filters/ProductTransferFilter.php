<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class ProductTransferFilter extends BaseFilter
{
    /**
     * @param int $id
     */
    public function toBranch(int $id)
    {
        $this->builder->where('to_id', $id);
    }
    /**
     * @param int $id
     */
    public function fromBranch(int $id)
    {
        $this->builder->where('from_id', $id);
    }
}
