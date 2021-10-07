<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Filters\NewOrderFilter;
use App\NewOrder;
use App\OrderStatus;
use App\Repositories\NewOrderRepository;

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
        $newOrdersWithComplete =  $this->newOrderRepository->reportQuery($newOrderFilter)
        ->whereHas('amortization', function ($query)
        {
            $query->where('actual_payment_date', '!=', null);
        })->pluck('new_orders.id');
        $idOfForCompleted = OrderStatus::where('name', 'like', 'Completed')->first()->id;
        try {
            NewOrder::whereIn('id', $newOrdersWithComplete)->update(['status_id' => $idOfForCompleted]);
        } catch (\Throwable $th) {
           $this->error($th->getMessage());
        }
        
    }
}
