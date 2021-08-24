<?php

namespace App\Console\Commands;

use App\AltaraPayDdData;
use App\DownPaymentRate;
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
        $downpaymentRates = DownPaymentRate::all();
        $orders->each(function ($order) use ($downpaymentRates) {
            $percent = ceil(($order->down_payment / $order->product_price) * 100);
            $downpaymentRate = $downpaymentRates->firstWhere('percent', '=', $percent);
            $this->info($downpaymentRate->id);
        });
    }
}
