<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProspectActivity extends Model
{
    //
    protected $guarded = [];

    public function contactCustomer()
    {
        return $this->belongsTo(ContactCustomer::class);
    }
}
