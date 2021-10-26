<?php

namespace App\Services;

use App\Helper\LogHelper;
use App\NewOrder;
use App\RenewalPrompter;
use App\RenewalPrompterStatus;
use Illuminate\Support\Facades\DB;

class RenewalPrompterService
{

    public function generateMetaData($renewalPrompterStatQuery, $renewalPrompterQuery): array
    {
        $contacted = $this->getNumberOfContacted(clone $renewalPrompterQuery);
        $interested = $this->getNumberOfInterested(clone $renewalPrompterQuery);
        $purchased_renewed = $this->getNumberOfRenewed(clone $renewalPrompterQuery);
        return [
            'contacted' => $contacted,
            'interested' => $interested,
            'purchased_renewed' => $purchased_renewed
        ];
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

    public function getAgentsStats($renewalPrompterQuery)
    {
        $renewalPrompterQueryClone = clone $renewalPrompterQuery;
        return $renewalPrompterQuery->join('users', 'new_orders.owner_id', '=', 'users.id')
            ->select(DB::raw("count(*) as count"), "users.full_name", "new_orders.owner_id as owner_id", "new_orders.id as order_id")
            ->groupBy('owner_id')->get()->map(function ($agent) use ($renewalPrompterQueryClone) {
                return [
                    "agent_id" => $agent->owner_id,
                    'agent_name' => $agent->full_name,
                    'number_sales' => $agent->count,
                    "total_renewals" => $this->getTotalRenewal(clone $renewalPrompterQueryClone, $agent->owner_id)
                ];
            })->sortByDesc('total_renewals')->take(10)->values();
    }

    public function getTotalRenewal($query, $owner_id)
    {
        return $query->where('owner_id', $owner_id)->whereHas('renewalPrompters', function ($query) {
            $query->where('renewal_prompter_status_id', RenewalPrompterStatus::where('name', 'renewed')->first()->id ?? '');
        })->count();
    }
}
