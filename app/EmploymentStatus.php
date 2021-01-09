<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmploymentStatus extends Model
{
    use HasFactory;

    const EMPLOYED = 'Employed';
    const UNEMPLOYED = 'UnEmployed';
    const SELF_EMPLOYED = 'Self-Employed';
}
