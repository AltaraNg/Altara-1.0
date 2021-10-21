<?php

namespace App\Traits;

/**
 *
 */
trait IFilterByBranchName
{
    /**
     * @var Builder
     */
    protected $builder;


    public function filterBranch()
    {
        if (auth()->user()->isDSACaptain()) {
            $this->builder->where('branch_id', auth()->user()->branch_id);
        } else if (auth()->user()->isCoordinator()) {

            // ** Might need refactoring
            $branches = auth()->user()->branches;
            $ids = $branches->map(function ($branch) {
                return $branch->id;
            });
            $this->builder->whereIn('branch_id', $ids);
        } else if (auth()->user()->isDSAAgent()) {
            $this->builder->where('user_id', auth()->user()->id);
        }
    }
}
