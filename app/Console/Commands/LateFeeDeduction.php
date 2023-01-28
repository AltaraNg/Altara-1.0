<?php

namespace App\Console\Commands;

use App\Services\LateFeeDeductionService;
use Carbon\Carbon;

class LateFeeDeduction extends BaseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'make:late-fee-debit';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';
    /**
     * @var LateFeeDeductionService
     */
    private $lateFeeDeductionService;

    /**
     * Create a new command instance.
     *
     * @param LateFeeDeductionService $lateFeeDeductionService
     */
    public function __construct(LateFeeDeductionService $lateFeeDeductionService)
    {
        parent::__construct();
        $this->lateFeeDeductionService = $lateFeeDeductionService;
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
        $this->line('<info>[' . Carbon::now()->format('Y-m-d H:i:s') . ']</info> Calling Late Fee Deduction');
        try {
            $response = $this->lateFeeDeductionService->handle();
            $this->info(count($response) . ' records treated');
            $this->table(
                ['Id', 'Order Id', 'Amount', 'Status', 'Message'],
                $response
            );
        } catch (\Exception $e) {
            $this->error($e->getMessage() ?? 'Something went wrong');
        }

        $this->info('Late Fee deduction completed.');
        $this->info('Exiting...');
        return 0;
    }
}
