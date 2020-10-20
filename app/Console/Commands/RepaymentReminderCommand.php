<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\ReminderService;

class RepaymentReminderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */


    protected $signature = 'remind_customer {days : number of days to next repayment}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get a list of customers due for repayment and sends text message to them and also sends output to mails';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(ReminderService $reminder_service)
    {

        parent::__construct();
        $this->reminder_service = $reminder_service;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        try {
            //code...
            $customers = $this->reminder_service->fetchCustomers(100);
        } catch (\Exception $e) {
            //throw $th;
        }
        $this->info('customers: successful');
        return 0;
    }
}
