<?php

namespace App\Console\Commands;

use Carbon\Carbon;

class DirectDebitDeduction extends BaseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'make:debit '
    . '{--days= : The number of days payment past due e.g 7} '
    . '{--date= : Send Sms Reminder for a specific date in the past e.g 2020-11-06} ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     * @throws \Exception
     */
    public function handle()
    {
        $this->valInput();
        $this->processInput();
        $this->process();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function process()
    {
        $this->line('<info>[' . Carbon::now()->format('Y-m-d H:i:s') . ']</info> Calling Direct Debit');
        try {
            $days = $this->option('days');
            $date = $this->option('date');

            $response = $this->reminderCommandService->handle($days, $date);

        } catch (\Exception $e) {
            $this->error($e->getMessage() ?? 'Something went wrong');
        }
        return 0;
    }
}
