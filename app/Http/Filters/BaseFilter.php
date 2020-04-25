<?php

namespace App\Http\Filters;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class BaseFilter extends QueryFilter
{
    /**
     * @param int $id
     */
    public function branch(int $id)
    {
        $this->builder->where('branch_id', $id);
    }

    /**
     * @param string $date
     * @param string $column
     */
    public function date(string $date, $column='created_at')
    {
        $this->builder->whereDate($column, $date);
    }

    /**
     * @param string $from
     * @param string $column
     */
    public function from(string $from, $column='created_at')
    {
        $this->builder->whereDate($column, '>=', $from)
            ->whereDate($column, '<=',$this->request->to ?? Carbon::now());
    }
}
