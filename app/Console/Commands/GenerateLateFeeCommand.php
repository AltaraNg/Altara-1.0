<?php

namespace App\Console\Commands;

use App\Services\GenerateLateFeeService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;


class GenerateLateFeeCommand extends BaseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:late-fee-gen' . '{--day= : Generate late fee for a specific day of the month in the past e.g 18. Must be in range 1 - 31} ';

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
        $this->valInput();
        $this->process();
        return 0;
    }

    public function process()
    {
        $this->line('<info>[' . Carbon::now()->format('Y-m-d H:i:s') . ']</info> Calling late fee');
        try {
            $day = $this->option('day');
            $response = $this->generateLateFeeService->handle($day);
            $this->info(count($response) . ' records treated');
            $this->table(
                ['ID', 'Order Number', 'Amount','Reason', 'Status'],
                $response
            );
        } catch (\Exception $e) {
            $this->error($e->getMessage() ?? 'Something went wrong');
        }

        $this->info('Late Fees Generated Successfully');
        $this->info('Exiting...');
        return 0;
    }

    protected function valInput()
    {
        $data = $this->option();
        $validator = Validator::make($data, [
            'day' => 'nullable|integer|min:1|max:32'
        ]);
        if ($validator->fails()) {
            $this->error('input arguments failed validation Errors: ');
            $errors = $validator->getMessageBag()->all();
            array_walk($errors, [$this, "error"]);
            exit();
        }
    }
}
