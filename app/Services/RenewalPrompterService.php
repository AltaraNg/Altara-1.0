<?php

namespace App\Services;

use App\RenewalPrompterStatus;
use Illuminate\Support\Facades\DB;

class RenewalPrompterService
{

    public function generateMetaData($renewalPrompterStatQuery, $renewalPrompterQuery)
    {
        $contacted = $this->getNumberOfContacted(clone $renewalPrompterQuery);
        $interested = $this->getNumberOfInterested(clone $renewalPrompterQuery);
        $purchased_renewed = $this->getNumberOfRenewed(clone $renewalPrompterQuery);
        $additional = [
            'contacted' => $contacted,
            'interested' => $interested,
            'purchased_renewed' => $purchased_renewed
        ];
        return $additional;
    }

    public function generateRenewalPrompterCustomerListMetaData($renewalPrompterQuery)
    {
        return $renewalPrompterQuery->join("customers", "new_orders.customer_id", "=", "customers.id")
            ->select(
                'customers.first_name as first',
                'customers.middle_name as mid',
                'customers.last_name as last',
                'customers.telephone as tele',
                'customers.email as email'
            )->get()->map(function ($data) {
                return [
                    "full_name" => "{$data->first} {$data->mid} {$data->last}",
                    "phone_number" => $data->tele,
                    "email" => $data->email
                ];
            });
//        return $additional;
    }


    private function getNumberOfContacted($renewalPrompterQuery)
    {
        return $renewalPrompterQuery->whereHas('renewalPrompters', function ($query) {
            $query->where('renewal_prompter_status_id', RenewalPrompterStatus::where('name', 'contacted')->first()->id);
        })->count();
    }

    private function getNumberOfInterested($renewalPrompterQuery)
    {
        return $renewalPrompterQuery->whereHas('renewalPrompters', function ($query) {
            $query->where('renewal_prompter_status_id', RenewalPrompterStatus::where('name', 'interested')->first()->id);
        })->count();
    }

    private function getNumberOfRenewed($renewalPrompterQuery)
    {
        return $renewalPrompterQuery->whereHas('renewalPrompters', function ($query) {
            $query->where('renewal_prompter_status_id', RenewalPrompterStatus::where('name', 'renewed')->first()->id);
        })->count();
    }
}
