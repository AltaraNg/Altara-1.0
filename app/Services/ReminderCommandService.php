<?php

namespace App\Services;


class ReminderCommandService
{

    private $reminderService;
    private $smsService;
    public function __construct(ReminderService $reminderService, SMSService $smsService)
    {
        $this->reminderService = $reminderService;
        $this->smsService = $smsService;
    }
    public function handle($days)
    {
        $customers = $this->reminderService->fetchCustomers($days);
        $res = array();
        if (!empty($customer)) {
            foreach ($customers as $customer) {
                # code...
                $res[] = $this->smsService->create($customer->telephone, "I am sent");
            }
            return count($customers);
        } else {
            return 'No Customers are available';
        }
    }
}
