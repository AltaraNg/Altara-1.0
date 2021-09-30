<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Helper;

/**
 * Class Constants
 * @package App\Helper
 *
 * @author: Adeniyi
 */
class Constants
{

    const F_SMS = 'first_sms';
    const S_SMS = 'second_sms';
    const T_SMS = 'third_sms';
    const ALTARACREDIT = 'Altara_Credit';
    const ALTARAPAY = 'Altara_Pay';
    const FIRST_CALL = 'first_call';
    const SECOND_CALL = 'second_call';
    const THIRD_CALL = 'third_call';
    const CALLED = 'called';
    const UNREACHABLE = 'unreachable';
    const PENDING = 'pending';
    const FAILED_SMS = 'An Error Occured while trying to send sms to customer customer_name with Order order_number';
    const REPAYMENT_NOTIFICATION_ERROR = 'An Error Occurred while trying to send Repayment notification to customer customer_name with Order order_number';
    const ORDER_NOTIFICATION_ERROR = 'An Error Occurred while trying to send Order notification to customer customer_name with Order order_number';
    const RENEWAL_NOTIFICATION_ERROR = 'An Error Occurred while trying to send renewal notification to customer customer_name with Order order_number';

    const SUCCESSFUL_ORDER = 'Dear [customer_name], Welcome to Altara. 
    You have paid: N[down_payment]  
    Remaining Debt: N[repayment]
    Your next repayment of N[expected_amount] is due on [next_payment_date].';
    const SUCCESSFUL_REPAYMENT = 'Dear [customer_name], 
    Thank you for your repayment. You have made [no_of_repayment_made]/[total_no_of_repayment_expected] repayment. 
    Total paid so far: N[total_of_repayment_made]
    Total debt remaining: N[total_of_repayment_not_made].';


    static $reminderMessages = [
        self::F_SMS => [
            self::ALTARACREDIT =>
            'Hello customer_name,
            This is the 1st reminder that your expected payment of ₦single_repayment for product_name will be due in 7 days.
            Visit the showroom to pay or call us to confirm payment if you prefer to transfer. Pay on time for future rewards and to not incur penalties.
            Altara Credit branch',
            self::ALTARAPAY =>
            'Hello customer_name,
            This is the 1st reminder that your expected payment of ₦single_repayment for product_name will be due in 7days.
            Ensure your account is funded before this date to enable us deduct. Do not pay cash or transfer since you are activated on direct debit. Thank you
            Altara Credit branch',

        ],
        self::S_SMS => [
            self::ALTARACREDIT =>
            'Hello customer_name,
            This is the 2nd reminder that your expected payment of ₦single_repayment for product_name will be due in 3 days.
            Visit the showroom to pay or call us to confirm payment if you prefer to transfer. Pay on time for future rewards and to not incur penalties.
            Altara Credit branch',
            self::ALTARAPAY =>
            'Hello customer_name,
            This is the 2nd reminder that your expected payment of ₦single_repayment for product_name will be due in 3days.
            Ensure your account is funded before this date to enable us deduct. Do not pay cash or transfer since you are activated on direct debit. Thank you
            Altara Credit branch',

        ],
        self::T_SMS => [
            self::ALTARACREDIT =>
            'Hello customer_name,
            This is the 3rd reminder that your expected payment of ₦single_repayment for product_name will be due today.
            Visit the showroom to pay or call us to confirm payment if you prefer to transfer. Pay on time for future rewards and to not incur penalties.
            Altara Credit branch',
            self::ALTARAPAY =>
            'Hello customer_name,
            This is the 3rd reminder that your expected payment of ₦single_repayment for product_name will be due today.
            Ensure your account is funded before this date to enable us deduct. Do not pay cash or transfer since you are activated on direct debit. Thank you
            Altara Credit branch',

        ],


    ];
}
