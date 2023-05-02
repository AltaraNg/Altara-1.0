<?php

namespace App\Helper;

class LateFeeReminderMessages
{
    const DAY_ONE = 'Dear [customer_name], 
    You have today to pay your outstanding balance of N[amount_owed] to avoid a late fee of N[late_fee]. Fund your account or notify us once payments have been transferred. Thank you. 
    From Altara Management';

    const DAY_SEVEN = 'Dear [customer_name], 
    You have 7 days to pay your outstanding balance of N[amount_owed] to avoid a late fee of N[late_fee]. Fund your account or notify us once payments have been transferred. Thank you. 
    From Altara Management';

    const DAY_FIFTEEN = 'Dear [customer_name], 
    You have 15 days to pay your outstanding balance of N[amount_owed] to avoid a late fee of N[late_fee]. Fund your account or notify us once payments have been transferred. Thank you. 
    From Altara Management';
}
