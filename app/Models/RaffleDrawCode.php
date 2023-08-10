<?php

namespace App\Models;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RaffleDrawCode extends Model
{
    use HasFactory;
    use Filterable;
    protected $guarded = [];

    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }

}
