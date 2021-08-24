<?php

namespace App\Console\Commands;

use App\AltaraPayDdData;
use App\Log;
use App\NewOrder;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log as FacadesLog;

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
        $orders =  NewOrder::whereNotNull(['down_payment', 'product_price'])->get()->take(20);

        $orders->each(function ($order) {
            $percent = ($order->down_payment / $order->product_price) * 100;
            
            $this->info(ceil($percent));
        });
    }
}
