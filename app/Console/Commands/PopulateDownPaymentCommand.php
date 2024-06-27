<?php

namespace App\Console\Commands;

use App\Models\NewOrder;
use App\Repositories\DownPaymentRateRepository;
use App\Repositories\NewOrderRepository;
use Illuminate\Console\Command;

class PopulateDownPaymentCommand extends Command
{
    private $downPaymentRateRepo;
    private $newOrderRepo;
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
    protected $description = 'Populates NewOrder Table with Down Payment ID';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(NewOrderRepository $newOrderRepository,  DownPaymentRateRepository $downPaymentRateRepository)
    {
        parent::__construct();
        $this->downPaymentRateRepo = $downPaymentRateRepository;
        $this->newOrderRepo = $newOrderRepository;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $orders =  NewOrder::whereNotNull('down_payment')
            ->whereNotNull('product_price')
            ->whereNull('down_payment_rate_id')
            ->get();
        $this->info('Found ' . $orders->count() . ' new orders');
        $count = 0;
        foreach ($orders as $order) {
            $percent = ($order->down_payment / $order->product_price) * 100;
            if ($percent < 5) {
                $this->updateNewOrderDownPaymentRateOrderID($order, $this->getDownPaymentID(0));
                $count++;
                continue;
            }

            if ($percent >= 5 && $percent <= 14) {
                $this->updateNewOrderDownPaymentRateOrderID($order, $this->getDownPaymentID(10));
                $count++;
                continue;
            }
            if ($percent >= 15 && $percent <= 29) {
                $this->updateNewOrderDownPaymentRateOrderID($order, $this->getDownPaymentID(20));
                $count++;
                continue;
            }
            if ($percent >= 30 && $percent <= 49) {
                $this->updateNewOrderDownPaymentRateOrderID($order, $this->getDownPaymentID(40));
                $count++;
                continue;
            }
            if ($percent >= 50 && $percent <= 69) {
                $this->updateNewOrderDownPaymentRateOrderID($order, $this->getDownPaymentID(60));
                $count++;
                continue;
            }
            if ($percent >= 70) {
                $this->updateNewOrderDownPaymentRateOrderID($order, $this->getDownPaymentID(80));
                $count++;
                continue;
            }
        }
        $this->info($count . ' New Orders Updated');
        return 0;
    }

    private  function getDownPaymentID($downPaymentRatePercent)
    {
        $downPaymentRate = $this->downPaymentRateRepo->all()->firstWhere('percent', '=', $downPaymentRatePercent);
        return $downPaymentRate->id ?? null;
    }

    private function updateNewOrderDownPaymentRateOrderID($order, $downPaymentRateID)
    {
        $this->newOrderRepo->update($order, [
            'down_payment_rate_id' =>  $downPaymentRateID,
        ]);
        $this->info('Updated Made');
    }
}
