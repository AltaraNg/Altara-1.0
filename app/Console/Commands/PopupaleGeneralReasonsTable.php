<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class PopupaleGeneralReasonsTable extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'insert:reasons';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate general reasons table';

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
     */
    public function handle()
    {
        $reasons = [
            'Called Customer - line unreachable',
            'Called Customer - not picking calls/avoiding calls',
            'Called Customer - reachable',
            'Visited Customer - found',
            'Visited Customer - wrong/false location',
            'Visited Customer - relocated',
            'Visited Customer - absconded',
            'Called Guarantor - line unreachable',
            'Called Guarantor - reachable',
            'Called Guarantor -  denying customer/ avoiding calls/not picking',
            'Customer Restarted Payment',
            'Completed Payment',
            'Product Repossessed',
            'Customers Product Taken',
            'Customer Promised to pay end of month',
            'Guarantor promised to make payment',
            'Customer is Deceased',
        ];
        $this->info('Found ' . count($reasons). ' reasons');
        foreach ($reasons as $data) {
            \App\GeneralReason::updateOrCreate([
                'reason' => $data,
                'reason_type' => 'recollection',
                'status' => true,
            ]);
        }
        $this->info('All reasons successfully inserted');
    }
}
