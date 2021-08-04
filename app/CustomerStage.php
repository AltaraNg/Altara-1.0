<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerStage extends Model
{

    const CONTACTED = 'Contacted';
    const REGISTERED = 'Registered On Portal';
    const AFFIDAVIT = 'Paid Affidavit';
    const PURCHASED = 'Paid Downpayment and Product Picked Up';
}
