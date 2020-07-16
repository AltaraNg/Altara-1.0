<?php

namespace App\Http\Filters;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class BaseFilter extends QueryFilter
{
    const DATE = 'created_at';
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
    public function date(string $date, $column=self::DATE)
    {
        $this->builder->whereDate($column, $date);
    }

    /**
     * @param string $from
     * @param string $column
     */
    public function from(string $from, $column=self::DATE)
    {
        $this->builder->whereDate($column, '>=', $from)
            ->whereDate($column, '<=',$this->request->to ?? Carbon::now());
    }

    /**
     * @param string $name
     */
    public function name(string $name)
    {
        $this->builder->where('name', $name);
    }
}
