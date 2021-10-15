<?php

namespace App\Services;

class RenewalPrompterService
{
    
    public  function generateMetaData($renewalPrompterQuery)
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
        return $renewalPrompterQuery->whereHas('renewalPrompterStatus', function ($query) {
            $query->where('name', 'contacted');
        })->count();
    }
    private  function getNumberOfInterested($renewalPrompterQuery)
    {
        return $renewalPrompterQuery->whereHas('renewalPrompterStatus', function ($query) {
            $query->where('name', 'interested');
        })->count();
    }
    private  function getNumberOfRenewed($renewalPrompterQuery)
    {
        return  $renewalPrompterQuery->whereHas('renewalPrompterStatus', function ($query) {
            $query->where('name', 'purchased/renewed');
        })->count();
    }
}
