<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerStage extends Model
{

    const CONTACTED = 'Contacted';
    const REGISTERED = 'Registered';
    const AFFIDAVIT = 'Affidavit';
    const PURCHASED = 'Purchased';
}
