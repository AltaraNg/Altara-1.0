<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Helper;

/**
 * Class Constants
 * @package App\Helpers
 *
 * @author: Adeniyi
 */
class Constants {

    const F_SMS_CREDIT = 'first_sms_credit';
    const F_SMS_PAY = 'first_sms_pay';
    const S_SMS_CREDIT = 'second_sms_credit';
    const S_SMS_PAY = 'second_sms_pay';
    const T_SMS_CREDIT = 'second_sms_credit';
    const T_SMS_PAY = 'second_sms_pay';
    const FIRST_CALL = 'first_call';
    const SECOND_CALL = 'second_call';
    const THIRD_CALL = 'third_call';
    const CALLED = 'called';
    const UNREACHABLE = 'unreachable';
    const PENDING = 'pending';
    const FAILED_SMS = 'An Error Occured while trying to send sms to customer customer_name with Order order_number';
    const REPAYMENT_NOTIFICATION_ERROR = 'An Error Occured while trying to send Repayment notification to customer customer_name with Order order_number';
    const ORDER_NOTIFICATION_ERROR = 'An Error Occured while trying to send Order notification to customer customer_name with Order order_number';

    const SUCCESSFUL_ORDER = 'Dear customer_name, this is to notify you that your order order_number was successful';
    const SUCCESSFUL_REPAYMENT = 'Dear customer_name, this is to notify you that your repayment towards order order_number was successful';


    static $reminderMessages = [
        self::F_SMS_CREDIT => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 7days',
        self::F_SMS_PAY => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 7days',
        self::S_SMS_CREDIT => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 14days',
        self::S_SMS_PAY => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 14days',
        self::T_SMS_CREDIT => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 21days',
        self::T_SMS_PAY => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 21days',
    ];
}
