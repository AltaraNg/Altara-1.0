<?php

namespace App\Console\Commands;

use App\Exports\NewOrdersExport;
use App\Http\Filters\NewOrderFilter;
use App\Repositories\NewOrderRepository;
use App\Services\NewOrdersReportService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;

class SendNewOrderReportCommmand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:report';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends NewOrder Report to the supplied email address';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    private $newOrderRepo;
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
    public function handle(NewOrderFilter $newOrderFilter,  NewOrdersReportService $newOrdersReportService)
    {
        $date = Carbon::now()->subDay()->format('Y-m-d');
        $date = "2021-07-14";
        $newOrdersQuery =  $this->newOrderRepo->query($newOrderFilter)->where('order_date', $date);
        $additional = $newOrdersReportService->generateMetaData($newOrdersQuery);
        $file = Excel::download(new NewOrdersExport($additional['groupedDataByBranch']), 'OrdersReport.csv');
        
    }
}
