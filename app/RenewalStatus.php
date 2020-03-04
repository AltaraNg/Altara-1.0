<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RenewalStatus extends Model
{
    protected $guarded = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function renewal_list()
    {
        return $this->belongsToMany(RenewalList::class);
    }
}
