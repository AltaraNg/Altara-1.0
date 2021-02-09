<?php

namespace App\Console;

use App\Exceptions\AException;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        'App\Console\Commands\DisapproveCustomers',
        'App\Console\Commands\RepaymentReminderCommand'
    ];

    /**
     * Define the application's command schedule.
     *
     * @param Schedule $schedule
     * @return void
     * @throws AException
     */
    protected function schedule(Schedule $schedule)
    {
        switch (request('type')){
            case 1:
                $schedule->command('send:smsReminder --type=first_sms --days=7')
                    ->emailOutputTo('naderounmu@altaracredit.com');
                break;
            case 2:
                $schedule->command('send:smsReminder --type=second_sms --days=14')
                    ->emailOutputTo('naderounmu@altaracredit.com');
                break;
            case 3:
                $schedule->command('send:smsReminder --type=third_sms --days=21')
                    ->emailOutputTo('naderounmu@altaracredit.com');
                break;
            case 4:
                $schedule->command('make:debit')
                    ->emailOutputTo('naderounmu@altaracredit.com');;
                break;
            default:
//                throw new AException('Type is invalid', 401);
        }

    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
