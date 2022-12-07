<?php

namespace App\Console\Commands;

use App\Services\DirectDebitService;
use Carbon\Carbon;

class DirectDebitDeduction extends BaseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'make:debit '
    . '{--date= : Send Sms Reminder for a specific date in the past e.g 2020-11-06} ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';
    /**
     * @var DirectDebitService
     */
    private $directDebitService;

    /**
     * Create a new command instance.
     *
     * @param DirectDebitService $directDebitService
     */
    public function __construct(DirectDebitService $directDebitService)
    {
        parent::__construct();
        $this->directDebitService = $directDebitService;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     * @throws \Exception
     */
    public function handle()
    {
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
            $response = $this->directDebitService->handle();
            $this->info(count($response) . ' records treated');
            $this->table(
                ['Id', 'Name', 'Order Id', 'Ammount', 'Status', 'Message'],
                $response
            );

        } catch (\Exception $e) {
            $this->error($e->getMessage() ?? 'Something went wrong');
        }

        $this->info('Direct Debit deduction completed.');
        $this->info('Exiting...');
        return 0;
    }
}
