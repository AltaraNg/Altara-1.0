<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Callbacks extends Model
{
    protected $guarded = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function renewal()
    {
        return $this->belongsTo(RenewalList::class);
    }
}
