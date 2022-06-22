<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class LateFee extends Model
{
    //
    use Filterable;
    protected $guarded = [];

    public function newOrder(){
        $this->belongsTo(NewOrder::class, 'order_id');
    }
}
