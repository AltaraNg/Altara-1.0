<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FigFinance extends Model
{
    protected $connection ='fig';
    protected $table = 'platform_metrics';
}
