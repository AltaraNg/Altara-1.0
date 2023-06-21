<?php

namespace App\Models;

use App\Helper\Scopes;
use Illuminate\Database\Eloquent\Model;

class PromiseCall extends Model
{
    use Scopes;

    protected $guarded = [];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
