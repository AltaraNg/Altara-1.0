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

    const SUCCESSFUL_ORDER = 'Dear customer_name, this is to notify you that your order order_number was successful';
    const SUCCESSFUL_REPAYMENT = 'Dear customer_name, this is to notify you that your repayment towards order order_number was successful';


    static $reminderMessages = [
        self::F_SMS => [
            self::ALTARACREDIT => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 7days',
            self::ALTARAPAY => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 7days',
        ],
        self::S_SMS => [
            self::ALTARACREDIT => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 7days',
            self::ALTARAPAY => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 7days',
        ],
        self::T_SMS => [
            self::ALTARACREDIT => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 7days',
            self::ALTARAPAY => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 7days',
        ]
    ];
}
