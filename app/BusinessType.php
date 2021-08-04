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
        const ALTARA_PAY_STARTER_CASH_LOAN = 'Altara Pay Starter Cash Loan';
        const ALTARA_PAY_RENTALS = 'Altara Pay Rentals';
        const ALTARA_PAY_EMPLOYEE_CASH_LOAN = 'Altara Pay Employee Cash Loan';

    //
    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
