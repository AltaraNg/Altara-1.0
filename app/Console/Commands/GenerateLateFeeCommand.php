<?php

namespace App\Console\Commands;

use App\Services\GenerateLateFeeService;
use Carbon\Carbon;
use Illuminate\Console\Command;

class GenerateLateFeeCommand extends BaseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:late-fee';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    private $generateLateFeeService;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(GenerateLateFeeService $generateLateFeeService)
    {
        parent::__construct();
        $this->generateLateFeeService = $generateLateFeeService;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        $this->process();
    }

    public function process()
    {
        $this->line('<info>[' . Carbon::now()->format('Y-m-d H:i:s') . ']</info> Calling late fee');
        try {
            $response = $this->generateLateFeeService->handle();
            $this->info(count($response) . ' records treated');
            $this->table(
                ['Order Number', 'Amount', 'Customer Name', 'Status'],
                $response
            );

        } catch (\Exception $e) {
            $this->error($e->getMessage() ?? 'Something went wrong');
        }

        $this->info('Late Fees Generated Successfully');
        $this->info('Exiting...');
        return 0;
    }
}
