<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentType extends Model
{
    protected $guarded = [];

    const DOWNPAYMENT = 'Downpayment';
    const REPAYMENTS = 'Repayments';
    const AFFIDAVITS = 'Affidavits';
    const WALLETS = 'Wallets';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
