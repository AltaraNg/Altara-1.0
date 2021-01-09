<?php


namespace App\Http\Filters;

use Carbon\Carbon;

class ContactCustomerFilter extends BaseFilter
{
    /**
     * @param int $status
     */
    public function stage($status)
    {
        $this->builder->where('customer_stage_id', $status);
    }

    /**
     * @param int $status
     */
    public function employmentStatus($status)
    {
        $this->builder->where('employment_status_id', $status);
    }

    /**
     * @param int $status
     */
    public function dsa($status)
    {
        $this->builder->where('user_id', $status);
    }

    public function filterBranch() {
        if (!auth()->user()->isAdmin()){
            $this->builder->where('user_id', auth()->user()->id);
        }
    }

    /**
     * @param string $from
     * @param string $column
     */
    public function startDate(string $from, $column=self::DATE)
    {
        $this->builder->whereDate($column, '>=', $from)
            ->whereDate($column, '<=',$this->request->endDate ?? Carbon::now());
    }
}
