<?php

namespace App\Services;

use App\RenewalPrompterStatus;

class RenewalPrompterService
{

    public  function generateMetaData($renewalPrompterStatQuery, $renewalPrompterQuery)
    {
        $contacted = $this->getNumberOfContacted(clone $renewalPrompterQuery);
        $interested =  $this->getNumberOfInterested(clone $renewalPrompterQuery);
        $purchased_renewed = $this->getNumberOfRenewed(clone $renewalPrompterQuery);
        $additional  = [
            'contacted' => $contacted,
            'interested' => $interested,
            'purchased_renewed' => $purchased_renewed
        ];
        return $additional;
    }

    private  function getNumberOfContacted($renewalPrompterQuery)
    {
        return $renewalPrompterQuery->whereHas('renewalPrompters', function ($query) {
            $query->where('renewal_prompter_status_id', RenewalPrompterStatus::where('name', 'contacted')->first()->id);
        })->count();
    }
    private  function getNumberOfInterested($renewalPrompterQuery)
    {
        return $renewalPrompterQuery->whereHas('renewalPrompters', function ($query) {
            $query->where('renewal_prompter_status_id', RenewalPrompterStatus::where('name', 'interested')->first()->id);
        })->count();
    }
    private  function getNumberOfRenewed($renewalPrompterQuery)
    {
        return  $renewalPrompterQuery->whereHas('renewalPrompters', function ($query) {
            $query->where('renewal_prompter_status_id', RenewalPrompterStatus::where('name', 'renewed')->first()->id);
        })->count();
    }
}
