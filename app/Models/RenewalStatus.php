<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class RenewalStatus extends Model
{
    protected $guarded = [];

    /**
     * @return BelongsToMany
     */
    public function renewal_list()
    {
        return $this->belongsToMany(RenewalList::class);
    }
}
