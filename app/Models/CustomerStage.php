<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerStage extends Model
{

    const CONTACTED = 'Contacted';
    const REGISTERED = 'Registered On Portal';
    const AFFIDAVIT = 'Paid Affidavit';
    const PURCHASED = 'Paid Downpayment and Product Picked Up';
    const KYC = "KYC Documents Submitted";

    public function prospectActivities()
    {
        return $this->morphMany(ProspectActivity::class, 'prospectActivityType', 'prospect_activity_type', 'prospect_activity_type_id');
    }
}
