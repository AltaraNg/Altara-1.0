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
    public function dsa(int $id)
    {
        $this->builder->where('user_id', $id);
    }

    public function filterBranch()
    {
        if (auth()->user()->isDSACaptain()){
            $this->builder->where('branch_id', auth()->user()->branch_id);
        }
        else if (auth()->user()->isCoordinator()){

            // ** Might need refactoring
            $branches = auth()->user()->branches;
            $ids = $branches->map(function ($branch) {
                return $branch->id;
            });
            $this->builder->whereIn('branch_id', $ids);
        }
        else if (auth()->user()->isDSAAgent()){
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
