<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BusinessType extends Model
{
    protected $guarded = [];
//    const ALTARA_CREDIT_PRODUCT = 'Altara Credit Products';
//    const ALTARA_PAY_PRODUCT = 'Altara Pay Products';
//    const ALTARA_CREDIT_CASH_LOAN = 'Altara Credit Cash Loan';
//    const ALTARA_PAY_CASH_LOAN = 'Altara Pay Cash Loan';
//    const ALTARA_PAY_CASH_LOAN_PRODUCT = 'Altara Pay Cash Loan(Product)';
//    const ALTARA_PAY_STARTER_CASH_LOAN = 'Altara Pay Starter Cash Loan';
//    const ALTARA_PAY_RENTALS = 'Altara Pay Rentals';
//    const ALTARA_PAY_EMPLOYEE_CASH_LOAN = 'Altara Pay Employee Cash Loan';

    const ALTARA_CREDIT_PRODUCT_SLUG = 'ac_products';
    const ALTARA_PAY_PRODUCT_SLUG = 'ap_products';
    const ALTARA_CREDIT_CASH_LOAN_SLUG = 'ac_cash_loan';
    const ALTARA_PAY_CASH_LOAN_SLUG = 'ap_cash_loan';
    const ALTARA_PAY_CASH_LOAN_PRODUCT_SLUG = 'ap_cash_loan-product';
    const ALTARA_PAY_STARTER_CASH_LOAN_SLUG = 'ap_starter_cash_loan';
    const ALTARA_PAY_RENTALS_SLUG = 'ap_rentals';
    const ALTARA_PAY_EMPLOYEE_CASH_LOAN_SLUG = 'ap_employee_cash_loan';

    //
    public function newOrder()
    {
        return $this->belongsTo(NewOrder::class);
    }
}
