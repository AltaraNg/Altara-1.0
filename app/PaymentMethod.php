<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    const DIRECT_DEBIT = 'direct-debit';

    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
