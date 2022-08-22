<?php

namespace App\Console\Commands;

use App\Services\LateFeeReminderCommandService;
use App\Services\ReminderService;
use Illuminate\Console\Command;

class SendLateFeeWarningMessageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:late-fee-message-warning';

    private $lateFeeReminderCommandService;
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used for send messages to customers that there order is about to attract late fee';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(LateFeeReminderCommandService $lateFeeReminderCommandService)
    {
        parent::__construct();
        $this->lateFeeReminderCommandService = $lateFeeReminderCommandService;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $response = 0;
        $this->info("Starting processing of Late fee SMS Reminders");
        try {
            $response =  $this->lateFeeReminderCommandService->handle();
            $this->info(count($response) . ' records treated');
            $this->table(
                ['Id', 'Name', 'Order Number', 'Sms', 'Status', 'Response Message'],
                $response
            );
        } catch (\Exception $e) {
            $this->error($e->getMessage() ?? 'Something went wrong');
        }

        $this->info('Late fee Sms Reminders completed.');
        $this->info('Exiting...');
        return 0;
    }
}
