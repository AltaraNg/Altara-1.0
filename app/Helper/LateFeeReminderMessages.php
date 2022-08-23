<?php

namespace App\Helper;

class LateFeeReminderMessages
{
    const DAY_ONE = 'Dear [customer_name], Please note that you will be charged N[late_fee] for late fee tomorrow';
    const DAY_THREE = 'Dear [customer_name], Please note that you will be charged N[late_fee] for late fee in 3 days';
    const DAY_SEVEN = 'Dear [customer_name], Please note that you will be charged N[late_fee] for late fee in 7 days';
    const DAY_FOURTEEN = 'Dear [customer_name], Please note that you will be charged N[late_fee] for late fee in 14 days';
}
