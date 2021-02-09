<?php

namespace App\Console\Commands;

use App\Helper\Constants;
use App\Services\ReminderCommandService;
use Illuminate\Support\Facades\Validator;


class RepaymentReminderCommand extends BaseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'send:smsReminder '
    . '{--days= : The number of days payment past due e.g 7} '
    . '{--date= : Send Sms Reminder for a specific date in the past e.g 2020-11-06} '
    . '{--type= : The type of message e.g first_sms, second_sms, third_sms,} ';
    private $reminderCommandService;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends Sms Reminder and report. '
    . 'It allows specifying a days an order payment is due ';

    /**
     * Create a new command instance.
     *
     * @param ReminderCommandService $reminderCommandService
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
     * @throws \Exception
     */
    public function handle()
    {
        $this->valInput();
        $this->processInput();
        $this->process();
    }

    public function process()
    {
        $response = 0;
        $this->info("Starting processing of Sms Reminders");
        $this->info('');
        try {
            $days = $this->option('days');
            $type = $this->option('type');
            $date = $this->option('date');

            $response = $this->reminderCommandService->handle($days, $type, $date);
            $this->info(count($response) . ' records treated');
            $this->table(
                ['Id', 'Name', 'Order Id', 'Sms', 'Status', 'Response Message'],
                $response
            );

        } catch (\Exception $e) {
            $this->error($e->getMessage() ?? 'Something went wrong');
        }

        $this->info('Sms Reminders completed.');
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
            'type' => 'required|in:' . Constants::F_SMS . ',' . Constants::S_SMS . ',' . Constants::T_SMS,
            'days' => 'required|integer|min:1'
        ]);
        if ($validator->fails()) {
            $this->error('input arguments failed validation Errors: ');
            $errors = $validator->getMessageBag()->all();
            array_walk($errors, [$this, "error"]);
            exit();
        }
    }
}
