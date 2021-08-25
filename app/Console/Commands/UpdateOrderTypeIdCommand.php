<?php

namespace App\Console\Commands;

use App\BusinessType;
use App\NewOrder;
use App\OrderType;
use App\Repositories\NewOrderRepository;
use App\Repositories\OrderTypeRepository;
use Illuminate\Console\Command;

class UpdateOrderTypeIdCommand extends Command
{
    private $newOrderRepo;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'populate:ordertype';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command updates null order_type_id column on new_orders table';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(NewOrderRepository $newOrderRepository)
    {
        parent::__construct();
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
            ->whereNotNull('down_payment')
            ->whereNull('order_type_id')
            ->get();
        $altaraPayBusinessTypeIds = $this->getAltaraPayBusinessTypeIds();
        $altaraCreditBusinessTypeIds = $this->getAltaraCreditBusinessTypeIds();
        $altaraPayOrderTypeId = $this->getAltaraPayOrderTypeId();
        $altaraCreditOrderTypeId = $this->getAltaraCreditOrderTypeId();
        $this->info('Found ' . $orders->count() . ' new orders');
        $count = 0;
        foreach ($orders as  $order) {
            //checking for Altara Pay
            if (in_array($order->business_type_id, $altaraPayBusinessTypeIds)) {
                $this->updateNewOrderOrderTypeID($order, $altaraPayOrderTypeId);
                $count++;
                continue;
            }
            //checking for Altara Credit
            if (in_array($order->business_type_id,  $altaraCreditBusinessTypeIds)) {
                $this->updateNewOrderOrderTypeID($order, $altaraCreditOrderTypeId);
                $count++;
                continue;
            }
        }
        $this->info($count . ' New Orders Updated');
    }

    private  function getAltaraPayBusinessTypeIds()
    {
        return BusinessType::where('name', 'like', '%Altara Pay%')->pluck('id')->toArray();
    }

    private  function getAltaraCreditBusinessTypeIds()
    {
        return BusinessType::where('name', 'like', '%Altara Credit%')->pluck('id')->toArray();
    }

    private  function getAltaraPayOrderTypeId()
    {
        $orderType = OrderType::where('name', 'like', '%Altara Pay%')->first();
        return  $orderType->id;
    }

    private  function getAltaraCreditOrderTypeId()
    {
        $orderType = OrderType::where('name', 'like', '%Altara Credit%')->first();
        return  $orderType->id;
    }

    private function updateNewOrderOrderTypeID($order, $orderTypeId)
    {
        $this->newOrderRepo->update($order, [
            'order_type_id' =>  $orderTypeId,
        ]);
        $this->info('Updated Made');
    }
}
