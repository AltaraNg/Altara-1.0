<?php

namespace App;

use App\Traits\UUIDTrait;
use Illuminate\Database\Eloquent\Model;

class FigFinance extends Model
{
    use UUIDTrait;
    protected $connection ='fig';
    protected $table = 'platform_metrics';
    protected $fillable = ['date', 'key', 'value'];
    public $timestamps = false;
}
