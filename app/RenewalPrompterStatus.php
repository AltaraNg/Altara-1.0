<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RenewalPrompterStatus extends Model
{
    protected $guarded = [];
    //
    /**
     * Get the customer that owns the status.
     */
    public function customers()
    {
        return $this->hasMany(Customer::class);
    }
}
