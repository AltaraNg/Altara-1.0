<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class ProspectActivity extends Model
{
    //
    use Filterable;
    protected $guarded = [];

    public function contactCustomer()
    {
        return $this->belongsTo(ContactCustomer::class);
    }

    public function prospectActivityType()
    {
        return $this->morphTo('prospectActivityType', 'prospect_activity_type', 'prospect_activity_type_id');
    }
}
