<?php

namespace App\Console\Commands;

use App\Http\Filters\NewOrderFilter;
use App\Models\OrderStatus;
use App\Repositories\NewOrderRepository;
use Illuminate\Console\Command;

class UpdateCompletedNewOrdersStatuses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:orderstatus';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Updates orders that have been completed and are already in the system';
    private $newOrderRepository;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(NewOrderRepository $newOrderRepository)
    {
        parent::__construct();
        $this->newOrderRepository = $newOrderRepository;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle(NewOrderFilter $newOrderFilter)
    {
        $this->info("Starting to update new orders table status");
        $this->info('');
        $newOrders = $this->newOrderRepository->reportQuery($newOrderFilter)
            ->has('amortization')->with('amortization')->get()->filter(function ($order) {
                $noORepaymentMade = $order->amortization->where('actual_payment_date', '!=', null)->count();
                $expectedNoOFPayment = $order->amortization->count();
                return $noORepaymentMade == $expectedNoOFPayment;
            });
        $idOfForCompleted = OrderStatus::where('name', 'like', 'Completed')->first()->id;
        try {
            $count = 0;
            foreach ($newOrders as $order){
                $order->update(['status_id' => $idOfForCompleted]);
                $count++;
            }
            $this->info($count . " orders updated");
        } catch (\Throwable $th) {
            $this->error($th->getMessage());
        }

        return 0;
    }
}
