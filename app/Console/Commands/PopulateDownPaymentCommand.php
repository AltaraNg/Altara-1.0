<?php

namespace App\Console\Commands;

use App\NewOrder;
use Illuminate\Console\Command;

class PopulateDownPaymentCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'populate:downpayment';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populates NewOrder Table with Downpayment ID';

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
        NewOrder::all()->chunk(function ($order)
        {
            dd($order);
        });
    }
}
