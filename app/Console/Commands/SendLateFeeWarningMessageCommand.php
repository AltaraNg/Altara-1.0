<?php

namespace App\Console\Commands;

use App\Services\LateFeeReminderCommandService;
use App\Services\ReminderService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;

class SendLateFeeWarningMessageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:late-fee-message-warning '
        . '{--start_date= : Send late fee sms reminder for a specific start date e.g 2020-11-06} ';

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
        $this->validateInput();
        $response = 0;
        $this->info("Starting processing of Late fee SMS Reminders");
        try {
            $start_date = $this->option('start_date');
            if (!$start_date) {
                $start_date = Carbon::now()->format('Y-m-d');
            }
            $response =  $this->lateFeeReminderCommandService->handle($start_date);
            $this->info(count($response) . ' records treated');
            $this->table(
                ['Id', 'Name', 'Order Number', 'Phone', 'Sms', 'Status', 'Response Message'],
                $response
            );
        } catch (\Exception $e) {
            $this->error($e->getMessage() ?? 'Something went wrong');
        }

        $this->info('Late fee Sms Reminders completed.');
        $this->info('Exiting...');
        return 0;
    }

    /**
     * Validate the input.
     *
     */
    protected function validateInput()
    {
        $data = $this->option();
        $validator = Validator::make($data, [
            'start_date' => 'nullable|date'
        ]);
        if ($validator->fails()) {
            $this->error('input arguments failed validation Errors: ');
            $errors = $validator->getMessageBag()->all();
            array_walk($errors, [$this, "error"]);
            exit();
        }
    }
}
