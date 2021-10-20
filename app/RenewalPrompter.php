<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class RenewalPrompter extends Model
{
    //
    use Filterable;
    protected $guarded = [];

    public function renewalPrompterStatus()
    {
      return  $this->belongsTo(RenewalPrompterStatus::class);
    }

    public function order()
    {
        return $this->belongsTo(NewOrder::class, 'order_id');
    }

}
