<?php

namespace App\Console\Commands;

use App\FigFinance;
use Illuminate\Console\Command;

class FigFinanceCommmand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fig:finance';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate platform_metrics table with stats';

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
        $fig  = FigFinance::all();
        dd($fig);
    }
}
