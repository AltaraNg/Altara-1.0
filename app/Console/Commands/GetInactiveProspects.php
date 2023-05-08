<?php

namespace App\Console\Commands;

use App\Services\OverdueProspectService;
use Illuminate\Support\Facades\Validator;


class GetInactiveProspects extends BaseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:inactiveProspects '
    . '{--months= : The number of months from present day e.g: 4}';

    private $overdueProspectsService;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send email containing list of prospects that have not bought product within specified month';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(OverdueProspectService $overdueProspectService)
    {
        $this->overdueProspectsService = $overdueProspectService;
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */

    public function handle()
    {
        $this->valInput();
        $this->process();
        return 0;
    }

    public function process()
    {
        $response = 0;
        $this->info("Starting processing of Sending Inactive prospects");
        $this->info('');
        try {
            $month = $this->option('months');

            $response = $this->overdueProspectsService->fetchInactiveProspects($month);
            $this->info(count($response) . ' records treated');
            $this->table(
                ['Id', 'Name', 'Order Id', 'Sms', 'Status', 'Response Message'],
                $response
            );

        } catch (\Exception $e) {
            $this->error($e->getMessage() ?? 'Something went wrong');
        }

        $this->info('Overdue prospects completed.');
        $this->info('Exiting...');
        return 0;
    }

    /**
     * Validate the input.
     *
     */
    protected function valInput()
    {
        $data = $this->option();
        $validator = Validator::make($data, [
            'months' => 'required|integer|min:0'
        ]);
        if ($validator->fails()) {
            $this->error('input arguments failed validation Errors: ');
            $errors = $validator->getMessageBag()->all();
            array_walk($errors, [$this, "error"]);
            exit();
        }
    }
}
