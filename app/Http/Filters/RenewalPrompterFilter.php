<?php

namespace App\Http\Filters;

use App\RenewalPrompterStatus;
use App\Traits\IFilterByBranchName;

class RenewalPrompterFilter extends BaseFilter
{
    use IFilterByBranchName;
    
}
