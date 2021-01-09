<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerStage extends Model
{
    use HasFactory;

    const CONTACTED = 'Contacted';
    const REGISTERED = 'Registered';
    const AFFIDAVIT = 'Affidavit';
    const PURCHASED = 'Purchased';
}
