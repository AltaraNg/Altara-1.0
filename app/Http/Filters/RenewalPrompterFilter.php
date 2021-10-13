<?php

namespace App\Http\Filters;

class RenewalPrompterFilter extends BaseFilter
{

    public function renewalPrompterStatus(string $renewalPrompterStatus)
    {
        $this->builder->whereHas('renewalPrompters',function ($query)
        {
            
        }); 
    }
    
}
