<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BusinessType extends Model
{
    protected $guarded = [];
        const ALTARA_CREDIT_PRODUCT = 'Altara Credit Products';
        const ALTARA_PAY_PRODUCT = 'Altara Pay Products';
        const ALTARA_CREDIT_CASH_LOAN = 'Altara Credit Cash Loan';
        const ALTARA_PAY_CASH_LOAN = 'Altara Pay Cash Loan';
        const ALTARA_PAY_CASH_LOAN_PRODUCT = 'Altara Pay Cash Loan(Product)';

    //
    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
