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
     * @param string $id
     */
    public function regId($id)
    {
        $this->builder->where('reg_id', $id);
    }

    /**
     * @param int $phone
     */
    public function phone($phone)
    {
        $this->builder->where('phone', $phone);
    }

    /**
     * @param int $status
     */
    public function dsa($status)
    {
        $this->builder->where('user_id', $status);
    }

    public function filterBranch()
    {
        if (auth()->user()->isDSACaptain()){
            $this->builder->where('branch_id', auth()->user()->branch_id);
        }
        else if (auth()->user()->isCoordinator()){
            // Todo: filter for coordinator
        }
        else if (auth()->user()->DSAAgent()){
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
