<?php

namespace App\Http\Filters;

use App\RenewalPrompterStatus;
use App\Traits\IFilterByBranch;

class RenewalPrompterFilter extends BaseFilter
{
    use IFilterByBranch;
    
}
