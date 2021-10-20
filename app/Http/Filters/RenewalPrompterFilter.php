<?php

namespace App\Http\Filters;

use App\RenewalPrompterStatus;
use App\Traits\IFilterByBranch;
use Illuminate\Support\Facades\DB;

class RenewalPrompterFilter extends BaseFilter
{
    use IFilterByBranch;
    
    public function topAgents($count = 10)
    {
        $this->builder->whereHas('renewalPrompterStatus', function ($query) {
            $query->where('name', 'renewed');
          })->join('users', 'renewal_prompters.user_id', '=', 'users.id')->select(
            'users.full_name as name',
            'users.id as user_id',
            DB::raw("count(*) as count"),
            "renewal_prompters.created_at as renewal_date"
          )->groupBy('user_id')->take($count);
    }
}
