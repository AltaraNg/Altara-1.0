<?php

namespace App\Console\Commands;

use App\Services\ReminderCommandService;
use Illuminate\Console\Command;


class RepaymentReminderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */


    protected $signature = 'remind_customer {days : number of days to next repayment}';
    private $reminderCommandService;

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
    public function __construct(ReminderCommandService $reminderCommandService)
    {

        parent::__construct();
        $this->reminderCommandService = $reminderCommandService;
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
            $days = $this->argument('days');
            $ans = $this->reminderCommandService->handle($days);

        } catch (\Exception $e) {
            //throw $th;
        }
        $this->info($ans);
        return 0;
    }
}
