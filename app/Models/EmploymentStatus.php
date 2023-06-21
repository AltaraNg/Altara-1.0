<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmploymentStatus extends Model
{
    const EMPLOYED = 'Employed';
    const UNEMPLOYED = 'UnEmployed';
    const SELF_EMPLOYED = 'Self-Employed';
}
