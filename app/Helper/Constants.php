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

    const FIRST_SMS = 'first_sms';
    const SECOND_SMS = 'second_sms';
    const THIRD_SMS = 'third_sms';
    const FIRST_CALL = 'first_call';
    const SECOND_CALL = 'second_call';
    const THIRD_CALL = 'third_call';
    const CALLED = 'called';
    const UNREACHABLE = 'unreachable';
    const PENDING = 'pending';

    static $reminderMessages = [
        self::FIRST_SMS => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 7days',
        self::SECOND_SMS => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 14days',
        self::THIRD_SMS => 'Dear customer_name, this is to remind you that your payment on order order_number is past due for 21days',
    ];
}
