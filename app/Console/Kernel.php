<?php

namespace App\Console;

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
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('send:smsReminder --type=first_sms --days=7')
            ->dailyAt('8:00')
            ->emailOutputTo('naderounmu@altaracredit.com');
        $schedule->command('send:smsReminder --type=second_sms --days=14')
            ->dailyAt('9:00');
        $schedule->command('send:smsReminder --type=third_sms --days=21')
            ->dailyAt('10:00');

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
