<?php


namespace App\Helper;


interface OrderConstants
{
    const PROMISE_CALL_LIST = 8;
    const DIRECT_DEBIT_PAYMENT_METHOD = 4;
    const FIRST_SMS_AND_PROMISE_CALL = [8, 1];
    const COLLECTIONS_LIST = [9, 10, 11, 12, 13, 14];
    const DIRECT_DEBIT_IMPLEMENTATION_DATE = '2019-07-07';
    const REMINDER_TYPES = [
        'overdue' => ['mode' => 'overdue', 'name' => 'overdue', 'dayInterval' => null],
        '2' => ['mode' => 'sms', 'name' => 'secondSMS', 'dayInterval' => 7],
        '3' => ['mode' => 'sms', 'name' => 'thirdSMS', 'dayInterval' => 3],
        '4' => ['mode' => 'call', 'name' => 'firstCall', 'dayInterval' => 0],
        '5' => ['mode' => 'call', 'name' => 'secondCall', 'dayInterval' => 1],
        '6' => ['mode' => 'call', 'name' => 'thirdCall', 'dayInterval' => 5],
        '7' => ['mode' => 'call', 'name' => 'fourthCall', 'dayInterval' => 31],
        '8' => ['mode' => null, 'name' => 'promiseCall', 'dayInterval' => null],
        '9' => ['mode' => 'collection', 'name' => 'firstCollection', 'dayInterval' => 38],
        '10' => ['mode' => 'collection', 'name' => 'secondCollection', 'dayInterval' => 45],
        '11' => ['mode' => 'recovery', 'name' => 'firstRecovery', 'dayInterval' => 61],
        '12' => ['mode' => 'recovery', 'name' => 'secondRecovery', 'dayInterval' => 75],
        '13' => ['mode' => 'recovery', 'name' => 'thirdRecovery', 'dayInterval' => 90],
        '14' => ['mode' => 'external-recovery', 'name' => 'lawyerVisit', 'dayInterval' => 121]
    ];
}