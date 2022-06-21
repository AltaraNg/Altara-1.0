<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class LateFee extends Model
{
    //
    use Filterable;
    protected $guarded = [];
}
