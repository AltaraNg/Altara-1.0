<?php
namespace App\Services;

use App\ContactCustomer;
use App\CustomerStage;
use Carbon\Carbon;

class OverdueProspectService {
    public function fetchInactiveProspects($months){
        // ** Get list of contact customers that has not bought a product in the past 'x' month
        $now = Carbon::now();
        $data = ContactCustomer::where('customer_stage_id', CustomerStage::where('name', '!==', CustomerStage::PURCHASED)->first()->id)
        ->whereMonth('created_at', '<=',  $now->subMonths($months));

        return $data->get();


    }

}
