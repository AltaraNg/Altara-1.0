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
class Constants {

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
    const REPAYMENT_NOTIFICATION_ERROR = 'An Error Occured while trying to send Repayment notification to customer customer_name with Order order_number';
    const ORDER_NOTIFICATION_ERROR = 'An Error Occured while trying to send Order notification to customer customer_name with Order order_number';
    const RENEWAL_NOTIFICATION_ERROR = 'An Error Occured while trying to send renewal notification to customer customer_name with Order order_number';

    const SUCCESSFUL_ORDER = 'Dear customer_name, this is to notify you that your order order_number was successful';
    const SUCCESSFUL_REPAYMENT = 'Dear customer_name, this is to notify you that your repayment towards order order_number was successful';


    static $reminderMessages = [
        self::F_SMS => [
            self::ALTARACREDIT => 'Hello customer_name,
            This is the 1st reminder that your nth_repayment of repayment_amount for product_name will be due in 7 days on expected_date.
            Visit the showroom to pay or call us to confirm payment if you prefer to transfer. Pay on time for future rewards  and to avoid penalties.
            Altara Credit branch_name',
            self::ALTARAPAY => 'Hello customer_name,
            This is the 1st reminder that your nth_repayment of repayment_amount for product_name will be due in 7days on expected_date.
            Ensure your account is funded before this date to enable us deduct. Do not pay cash or transfer since you are activated on direct debit. Thank you
            Altara Credit branch_name',

        ],
        self::S_SMS => [
            self::ALTARACREDIT => 'Hello customer_name,
            This is the 1st reminder that your nth_repayment of repayment_amount for product_name will be due in 3 days on expected_date.
            Visit the showroom to pay or call us to confirm payment if you prefer to transfer. Pay on time for future rewards  and to avoid penalties.
            Altara Credit branch_name',
            self::ALTARAPAY =>  'Hello customer_name,
            This is the 2nd reminder that your nth_repayment of repayment_amount for product_name will be due in 3days on expected_date.
            Ensure your account is funded before this date to enable us deduct. Do not pay cash or transfer since you are activated on direct debit. Thank you
            Altara Credit branch_name',

        ],
        self::T_SMS => [
            self::ALTARACREDIT => 'Hello customer_name,
            This is the 1st reminder that your nth_repayment of repayment_amount for product_name will be due today, expected_date.
            Visit the showroom to pay or call us to confirm payment if you prefer to transfer. Pay on time for future rewards  and to avoid penalties.
            Altara Credit branch_name',
            self::ALTARAPAY =>
            'Hello customer_name,
            This is the 3rd reminder that your nth_repayment of repayment_amount for product_name will be due today,  expected_date.
            Ensure your account is funded before this date to enable us deduct. Do not pay cash or transfer since you are activated on direct debit. Thank you
            Altara Credit branch_name',

        ],


    ];
}
